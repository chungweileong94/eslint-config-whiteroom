/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');

const shareDependencies = require('./share/package.json').peerDependencies;


const PACKAGE_PATHS = [
  './base/package.json',
  './react/package.json',
];

const patchDependencies = packagePath => {
  const packageObj = require(packagePath);

  // Patch dependencies
  const newPackageObj = {
    ...packageObj,
    devDependencies: {
      ...packageObj.devDependencies,
      ...shareDependencies,
    },
    peerDependencies: {
      ...packageObj.peerDependencies,
      ...shareDependencies,
    },
  };

  // Write to package file
  fs.writeFile(
    packagePath,
    JSON.stringify(newPackageObj, null, 2),
    err => {
      if (err) {
        console.log(`'${packagePath}'\tFailed ❗`);
        console.error(err);
        return;
      }

      console.log(`'${packagePath}'\tPatched ✅`);
    },
  );
};

PACKAGE_PATHS.forEach(path => patchDependencies(path));
