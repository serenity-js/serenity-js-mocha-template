window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Mocha",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 532,
    "startedAt": "2026-08-18T15:05:44.387Z",
    "finishedAt": "2026-08-18T15:05:44.919Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "GET /v4/?expr supports calculating a single expression",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 470,
      "startedAt": "2026-08-18T15:05:44.387Z",
      "source": {
        "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts"
      },
      "tags": [
        {
          "type": "feature",
          "name": "Math-js API"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt sends a request to calculate 2 + 2",
          "outcome": "SUCCESS",
          "duration": 419,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-18T15:05:44.403Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 20,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2359/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-91f052f51a.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:05:44 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787065544\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787065544\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 995290\nx-ratelimit-reset: 1787071820\nconnection: close",
            "responseBody": "4"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal 4",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-18T15:05:44.833Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 21,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2359",
          "timestamp": "2026-08-18T15:05:44.387Z",
          "duration": 470,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 419,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T15:05:44.403Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2359/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-91f052f51a.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:05:44 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787065544\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787065544\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 995290\nx-ratelimit-reset: 1787071820\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T15:05:44.833Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ]
    },
    {
      "name": "POST /v4 supports calculating multiple expressions in one request",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 59,
      "startedAt": "2026-08-18T15:05:44.860Z",
      "source": {
        "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts"
      },
      "tags": [
        {
          "type": "feature",
          "name": "Math-js API"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
          "outcome": "SUCCESS",
          "duration": 22,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-18T15:05:44.864Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 39,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2359/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-60eb73c957.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "POST",
            "url": "http://api.mathjs.org/v4",
            "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
            "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Tue, 18 Aug 2026 15:05:44 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787065544\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787065544\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996607\nx-ratelimit-reset: 1787071821\nconnection: close",
            "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
          "outcome": "SUCCESS",
          "duration": 0,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-18T15:05:44.897Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 43,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2359",
          "timestamp": "2026-08-18T15:05:44.387Z",
          "duration": 59,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T15:05:44.864Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2359/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-60eb73c957.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Tue, 18 Aug 2026 15:05:44 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787065544\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=EwX8wdemTw8G2SN9Iqr%2FS57KfU3t6ZgSuE3fGn%2F1bks%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787065544\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996607\nx-ratelimit-reset: 1787071821\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T15:05:44.897Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-18T15:05:44.387Z",
      "duration": 532,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2359",
      "slowest": 470,
      "fastest": 59,
      "average": 265,
      "commit": "d8f68b8535c67fc14ed96e689455a37611f28563",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/32152220179",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "feature",
      "name": "Math-js API",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-mocha-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.7",
    "testRunner": {
      "name": "Mocha",
      "version": "11.8.0"
    },
    "browsers": [],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2359",
      "branch": "main",
      "commit": "d8f68b8535c67fc14ed96e689455a37611f28563",
      "commitMessage": "Merge pull request #1058 from serenity-js/chore/migrate-to-html-reporter",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/32152220179",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "@serenity-js/serenity-js-mocha-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "spec",
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "file",
        "name": "math-js_api",
        "outcomes": {
          "passed": 2,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "scenarios": [
          {
            "name": "GET /v4/?expr supports calculating a single expression",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "POST /v4 supports calculating multiple expressions in one request",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "spec"
};
