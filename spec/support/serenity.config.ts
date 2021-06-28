import 'mocha';

import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, configure } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

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
        ConsoleReporter.withDefaultColourSupport(),
        new SerenityBDDReporter(),
        ArtifactArchiver.storingArtifactsAt(__dirname, '../../target/site/serenity'),
    ]
});
