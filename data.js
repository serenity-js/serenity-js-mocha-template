window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "@serenity-js/serenity-js-mocha-template",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 568,
    "startedAt": "2026-09-04T18:58:56.226Z",
    "finishedAt": "2026-09-04T18:58:56.794Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "GET /v4/?expr supports calculating a single expression",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 393,
      "startedAt": "2026-09-04T18:58:56.226Z",
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
          "duration": 330,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-04T18:58:56.254Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 20,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2385/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-b425c39751.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Fri, 04 Sep 2026 18:58:56 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1788548336\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1788548336\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996305\nx-ratelimit-reset: 1788555443\nconnection: close",
            "responseBody": "4"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal 4",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-04T18:58:56.595Z",
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
        },
        {
          "outcome": "SUCCESS",
          "run": "2362",
          "timestamp": "2026-08-20T10:32:53.857Z",
          "duration": 230,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 165,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:32:53.887Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2362/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-a1e0fc7268.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Thu, 20 Aug 2026 10:32:54 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=fxzTFISr2ie%2FH%2B%2BypIp%2FUkx1txOTkSB62340p0HsXio%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787221974\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=fxzTFISr2ie%2FH%2B%2BypIp%2FUkx1txOTkSB62340p0HsXio%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787221974\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998588\nx-ratelimit-reset: 1787288560\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:32:54.062Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2365",
          "timestamp": "2026-08-20T12:43:30.230Z",
          "duration": 118,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 69,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:43:30.245Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2365/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-90f804efb1.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Thu, 20 Aug 2026 12:43:30 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=2XMYgvSrftOdxl4Hk01cnFWmCZZTj2U7fIYtyqRoABY%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787229810\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=2XMYgvSrftOdxl4Hk01cnFWmCZZTj2U7fIYtyqRoABY%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787229810\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 997320\nx-ratelimit-reset: 1787269041\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:43:30.324Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2368",
          "timestamp": "2026-08-21T01:16:59.887Z",
          "duration": 378,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 313,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T01:16:59.916Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2368/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-36311ddc4a.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Fri, 21 Aug 2026 01:17:00 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=gLb7uAcZpRJBeWl6%2Fr4JLDNBla88jGr7cScrj33riJo%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787275020\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=gLb7uAcZpRJBeWl6%2Fr4JLDNBla88jGr7cScrj33riJo%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787275020\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998957\nx-ratelimit-reset: 1787334866\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T01:17:00.241Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2374",
          "timestamp": "2026-08-26T23:56:44.837Z",
          "duration": 4060,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 4008,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-26T23:56:44.854Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2374/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-ef5ea537cb.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Wed, 26 Aug 2026 23:56:45 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=g3hTKt7P3CGZfNKlRWzL1JP6htujlw%2FGCgUuQVLg4xI%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787788605\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=g3hTKt7P3CGZfNKlRWzL1JP6htujlw%2FGCgUuQVLg4xI%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787788605\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998888\nx-ratelimit-reset: 1787839860\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-26T23:56:48.872Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2377",
          "timestamp": "2026-08-27T06:08:28.872Z",
          "duration": 593,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 543,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-27T06:08:28.888Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2377/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-0486017fea.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Thu, 27 Aug 2026 06:08:29 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=1V63iU0WUeDqFiUCdknDRJoeVewOP%2FxoxU6yfjl%2Bc7k%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787810909\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=1V63iU0WUeDqFiUCdknDRJoeVewOP%2FxoxU6yfjl%2Bc7k%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787810909\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999692\nx-ratelimit-reset: 1787891165\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-27T06:08:29.441Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2385",
          "timestamp": "2026-09-04T18:58:56.226Z",
          "duration": 393,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 330,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-04T18:58:56.254Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2385/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-b425c39751.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Fri, 04 Sep 2026 18:58:56 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1788548336\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1788548336\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996305\nx-ratelimit-reset: 1788555443\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-04T18:58:56.595Z",
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
      ],
      "id": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts:GET /v4/?expr supports calculating a single expression@serenity-js-mocha-template"
    },
    {
      "name": "POST /v4 supports calculating multiple expressions in one request",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 171,
      "startedAt": "2026-09-04T18:58:56.623Z",
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
          "duration": 134,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-04T18:58:56.627Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 39,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2385/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-814030fc52.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "POST",
            "url": "http://api.mathjs.org/v4",
            "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.20.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
            "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Fri, 04 Sep 2026 18:58:56 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1788548336\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1788548336\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996540\nx-ratelimit-reset: 1788555432\nconnection: close",
            "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-04T18:58:56.772Z",
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
        },
        {
          "outcome": "SUCCESS",
          "run": "2362",
          "timestamp": "2026-08-20T10:32:53.857Z",
          "duration": 52,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:32:54.096Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2362/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-867a91ff99.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Thu, 20 Aug 2026 10:32:54 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=fxzTFISr2ie%2FH%2B%2BypIp%2FUkx1txOTkSB62340p0HsXio%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787221974\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=fxzTFISr2ie%2FH%2B%2BypIp%2FUkx1txOTkSB62340p0HsXio%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787221974\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 997598\nx-ratelimit-reset: 1787267328\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:32:54.121Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2365",
          "timestamp": "2026-08-20T12:43:30.230Z",
          "duration": 57,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:43:30.356Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2365/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-051db4b757.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Thu, 20 Aug 2026 12:43:30 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=2XMYgvSrftOdxl4Hk01cnFWmCZZTj2U7fIYtyqRoABY%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787229810\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=2XMYgvSrftOdxl4Hk01cnFWmCZZTj2U7fIYtyqRoABY%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787229810\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 997165\nx-ratelimit-reset: 1787269064\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T12:43:30.387Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2368",
          "timestamp": "2026-08-21T01:16:59.887Z",
          "duration": 154,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 117,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T01:17:00.273Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2368/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-a780ecdc74.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Fri, 21 Aug 2026 01:17:00 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=gLb7uAcZpRJBeWl6%2Fr4JLDNBla88jGr7cScrj33riJo%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787275020\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=gLb7uAcZpRJBeWl6%2Fr4JLDNBla88jGr7cScrj33riJo%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787275020\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998969\nx-ratelimit-reset: 1787334821\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T01:17:00.401Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2374",
          "timestamp": "2026-08-26T23:56:44.837Z",
          "duration": 4770,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 4732,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-26T23:56:48.905Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2374/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-105a11777b.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Wed, 26 Aug 2026 23:56:48 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=NHbrFMonladLtmqQusqOpH7dr%2BxRTmWiWBwfi1r%2F5S0%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787788608\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=NHbrFMonladLtmqQusqOpH7dr%2BxRTmWiWBwfi1r%2F5S0%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787788608\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998945\nx-ratelimit-reset: 1787839859\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-26T23:56:53.648Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2377",
          "timestamp": "2026-08-27T06:08:28.872Z",
          "duration": 210,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 174,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-27T06:08:29.472Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2377/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-d6377aa392.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Thu, 27 Aug 2026 06:08:29 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=1V63iU0WUeDqFiUCdknDRJoeVewOP%2FxoxU6yfjl%2Bc7k%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787810909\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=1V63iU0WUeDqFiUCdknDRJoeVewOP%2FxoxU6yfjl%2Bc7k%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787810909\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999642\nx-ratelimit-reset: 1787891165\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-27T06:08:29.657Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        },
        {
          "outcome": "SUCCESS",
          "run": "2385",
          "timestamp": "2026-09-04T18:58:56.226Z",
          "duration": 171,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 134,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-04T18:58:56.627Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2385/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-814030fc52.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.20.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Fri, 04 Sep 2026 18:58:56 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1788548336\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=slfxMWBbs0Chrn0kIqkdcCwju0Ix4QyCS0sHP9xZL4E%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1788548336\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996540\nx-ratelimit-reset: 1788555432\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-04T18:58:56.772Z",
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
      ],
      "id": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts:POST /v4 supports calculating multiple expressions in one request@serenity-js-mocha-template"
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
    },
    {
      "timestamp": "2026-08-20T10:32:53.857Z",
      "duration": 287,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2362",
      "slowest": 230,
      "fastest": 52,
      "average": 141,
      "commit": "1bd650ce133a2b4895a0b16d7fcf4635c7d3073f",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/32359386942",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-20T12:43:30.230Z",
      "duration": 179,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2365",
      "slowest": 118,
      "fastest": 57,
      "average": 88,
      "commit": "613766815bc1e72c60134ea1e592c080e4c2806b",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/32370240628",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-21T01:16:59.887Z",
      "duration": 536,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2368",
      "slowest": 378,
      "fastest": 154,
      "average": 266,
      "commit": "a672cf807ef19fee84fc921351974ab57b4a00b3",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/32435665223",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-26T23:56:44.837Z",
      "duration": 8834,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2374",
      "slowest": 4770,
      "fastest": 4060,
      "average": 4415,
      "commit": "af52aa1092500bd4e5c78039e63576a2684560cf",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/33024979673",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-27T06:08:28.872Z",
      "duration": 807,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2377",
      "slowest": 593,
      "fastest": 210,
      "average": 402,
      "commit": "e0b692c200c5026449f348061081e9419ea9087a",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/33044738350",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-09-04T18:58:56.226Z",
      "duration": 568,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2385",
      "slowest": 393,
      "fastest": 171,
      "average": 282,
      "commit": "2c619dca1cdf496fa1e7cb7c2858ee73832209b0",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/33908638811",
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
    "nodeVersion": "v24.20.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.46.0",
    "testRunner": {
      "name": "Mocha",
      "version": "11.8.0"
    },
    "browsers": [],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2385",
      "branch": "main",
      "commit": "2c619dca1cdf496fa1e7cb7c2858ee73832209b0",
      "commitMessage": "fix(deps): update serenity/js and playwright (#1064)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-template/actions/runs/33908638811",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-template",
      "triggeredBy": "renovate[bot]"
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
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS"
            ]
          },
          {
            "name": "POST /v4 supports calculating multiple expressions in one request",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
              "SUCCESS",
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
