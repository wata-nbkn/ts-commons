# ts-commons

This is an utility module project for TypeScript.

## How to use

1. Go to the project root you want to use this module
1. `$ echo @wata-nbkn:registry=https://npm.pkg.github.com >> .npmrc`
1. `$ npm install --save @wata-nbkn/ts-commons`

Then, you can import the modules in your ts files.
e.g.

```.js
import { DateUtil } from '@wata-nbkn/ts-commons/lib/utils';
```

### For development

#### Commands

- test: `$ npm test`

  - You can run a single test by `$ npm test <path_to_test_file>`
  - _NOTE: When you run the mongo connector tests, you need to set `TEST_MONGO_SERVER_HOST_NAME` and `TEST_MONGO_PROT` env._

- build: `$ npm run build`

  - The built files will be distributed to `libs` folder.

- publish: `$ npm publish`
