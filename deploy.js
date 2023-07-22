
var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/Maria-k9717/Maria-k9717.github.io'
  }, callback);