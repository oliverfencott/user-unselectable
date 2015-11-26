var lodash = require('lodash');

var userUnselectable = {
  cursor: 'default',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none'
};

module.exports = function(styleObject) {
  return _.merge(userUnselectable, styleObject);
};
