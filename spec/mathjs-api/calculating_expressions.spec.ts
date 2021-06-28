/* eslint-disable unicorn/filename-case, unicorn/consistent-function-scoping */
import 'mocha';

import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { GetRequest, LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { escape } from 'querystring';

describe('Math.js API', () => {

    describe('GET /v4/?expr', () => {

        // you can give domain meaning to your API requests by introducing
        const RequestToCalculateExpression = (expression: string) =>
            GetRequest.to(`/v4?expr=${ escape(expression) }`)
                .describedAs(`a request to calculate ${ expression }`)

        it('supports calculating a single expression', () =>
            actorCalled('Apisitt').attemptsTo(
                Send.a(RequestToCalculateExpression('2 + 2')),
                Ensure.that(LastResponse.body<number>(), equals(4)),
            ));
    });

    describe('POST /v4', () => {

        const RequestToCalculateExpressions = (expressions: string[], precision?: number) =>
            PostRequest.to(`/v4`).with({ expr: expressions, precision })
                .describedAs(`a request to calculate ${ expressions.join(', ') }`)

        interface CalculatedExpressions {
            result: string[] | string | null;
            error: string | null;
        }

        it('supports calculating multiple expressions in one request', () =>
            actorCalled('Apisitt').attemptsTo(

                Send.a(RequestToCalculateExpressions([ '2 + 2', '5 - 3' ])),

                // note that LastResponse.body is generic;
                // you can configure it with an interface specifying the shape of the expected response body
                Ensure.that(LastResponse.body<CalculatedExpressions>(), equals({
                    result: [ '4', '2' ],
                    error: null,            // eslint-disable-line unicorn/no-null
                })),
            ));
    });
});
