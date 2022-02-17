# TODO App Typescript Version

- start by npm init in project folder
- npm install typescript
- create tsconfig file(tsc --init)

## tsconfig.js

- add watch true in tsconfig.js
- you can exclude your ts file by including "exclude":["node_modules","test.ts"] in config file.
- lib includes libraries you need 'DOM', 'ES6','DOM:iterable' ...
- sourceMap: true; for debugging in vscode (downlaod chrome browser ext)

After configurating tsconfig file

- open tsc watch in terminal(tsc --w)
