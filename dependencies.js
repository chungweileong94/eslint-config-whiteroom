/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');

const shareDependencies = require('./share/package.json').peerDependencies;

const PACKAGE_PATHS = [
  {
    path: './base/package.json'
  },
  {
    path: './react/package.json',
    // eslint-config-react-app came with another version
    ignorePackages: ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser']
  }
];

const patchDependencies = (packagePath, ignorePackages = []) => {
  const packageObj = require(packagePath);

  const filteredDependencies = Object.fromEntries(
    Object.entries(shareDependencies).filter(([key]) => !ignorePackages.includes(key))
  );

  // Patch dependencies
  const newPackageObj = {
    ...packageObj,
    devDependencies: {
      ...packageObj.devDependencies,
      ...filteredDependencies
    },
    peerDependencies: {
      ...packageObj.peerDependencies,
      ...filteredDependencies
    }
  };

  // Write to package file
  fs.writeFile(packagePath, JSON.stringify(newPackageObj, null, 2), err => {
    if (err) {
      console.log(`'${packagePath}'\tFailed ❗`);
      console.error(err);
      return;
    }

    console.log(`'${packagePath}'\tPatched ✅`);
  });
};

PACKAGE_PATHS.forEach(({path, ignorePackages}) => patchDependencies(path, ignorePackages, ignorePackages));
