# AGENTS.md

## Setup commands
- Deps are allready installed.
- Postgres should already be locally running.
- Start app: `node ./src/index.ts`. If this does not work, try `node --experimental-strip-types ./src/index.ts`. Since v22.18.0, Node.js enables "type stripping" by default
- Tests currently not implemented

## Code style
- TypeScript strict mode
- Do not compile to JS
- Run TS code directly in Node.js (Formally --experimental-strip-types - Now no longer needed, because feature is no longer experimental)
