import 'mocha';

import { configure } from '@serenity-js/core';
import path from 'path';

import { Actors } from '../../src';

/**
 * @desc
 *  Set up Serenity/JS reporting services before any scenarios are executed
 *
 * @see https://serenity-js.org/handbook/reporting/index.html
 */
configure({
    actors: new Actors(process.env.BASE_API_URL || 'http://api.mathjs.org/v4/'),
    crew: [
        [ '@serenity-js/console-reporter', { theme: 'auto' } ],
        [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: path.resolve(__dirname, '../../target/site/serenity') } ],
        [ '@serenity-js/serenity-bdd', { specDirectory: path.resolve(__dirname, '../../spec') } ],
    ]
});
