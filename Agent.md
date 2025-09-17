# AGENTS.md

## Setup commands
- Install deps: `npm i`
- Start postgres: `docker compose up -d`
- Start app: `node ./src/index.js`
- Tests currently not implemented

## Code style
- TypeScript strict mode
- Do not compile to JS
- Run TS code directly in Node.js (Formally --experimental-strip-types - Now no longer needed, because feature is no longer experimental)
