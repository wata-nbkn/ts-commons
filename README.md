# ts-commons

This is a utility module project for TypeScript.

## How to use

1. Go to the project root you want to use this module
1. `$ echo @wata-nbkn:registry=https://npm.pkg.github.com >> .env`
1. `$ npm install --save @wata-nbkn/ts-commons`

Then, you can import the modules in your ts files.
e.g.

```.js
import { getLogger } from '@wata-nbkn/ts-commons/lib/utils';
```

### For development

#### Commands

- test: `$ npm run test`

- build: `$ npm run build`
  - The built files will be distributed to `libs` folder.
