'use strict';

var toString      = require('to-str');
var pickItem      = require('pick-item');
var randomDoamins = require('random-domains');


module.exports = function (protocol, qurey, hash) {

  protocol = protocol ? toString(protocol) : pickItem(['http', 'https']);
  qurey    = qurey ? toString(qurey) : '';
  hash     = hash ? toString(hash) : '';

  var url = protocol + '://www.' + randomDoamins();

  if (qurey) {
    url += '?' + qurey;
  }

  if (hash) {
    url += '#' + hash;
  }

  return url;
};
