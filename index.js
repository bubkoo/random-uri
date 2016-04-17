'use strict';

var toString      = require('to-str');
var pickItem      = require('pick-item');
var randomDoamins = require('random-domains');


module.exports = function (protocol, query, hash) {

  protocol = protocol ? toString(protocol) : pickItem(['http', 'https']);
  query    = query ? toString(query) : '';
  hash     = hash ? toString(hash) : '';

  var url = protocol + '://www.' + randomDoamins();

  if (query) {
    url += '?' + query;
  }

  if (hash) {
    url += '#' + hash;
  }

  return url;
};
