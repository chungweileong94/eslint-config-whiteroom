# eslint-config-whiteroom

White Room ESLint Configuration

[![npm version](https://badge.fury.io/js/eslint-config-whiteroom.svg)](https://badge.fury.io/js/eslint-config-whiteroom)

## Installation

```
# Install "eslint-config-whiteroom"
yarn add -D eslint-config-whiteroom

# Install peer dependencies
npx install-peerdeps --dev eslint-config-whiteroom
```

## Configure ESLint

In your ESLint configuration file:

1. You need tell the parser where's your `tsconfig.json`

   ```diff
   + parserOptions: {
   +   project: './tsconfig.json'
   + }
   ```

2. Extends `eslint-config-whiteroom`

   ```diff
     extends: [
       ...
   +   'whiteroom',
     ]
   ```

   > If you are using React, do this instead:
   >
   > ```diff
   > extends: [
   >   ...
   > + 'whiteroom/react'
   > ]
   > ```
