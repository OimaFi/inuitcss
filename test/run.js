
const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

// Run tests using the new True v7+ API
glob.sync('test/_*.scss').forEach((file) => {
  sassTrue.runSass({ describe, it }, path.resolve(file));
});
