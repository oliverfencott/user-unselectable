var _ = require('lodash');

var userUnselectable = {
  cursor: 'default',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none'
};

module.exports = function(styleObject) {
  return _.merge(_.clone(userUnselectable), styleObject);
};
