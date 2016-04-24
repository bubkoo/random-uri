'use strict';

var assign       = require('object-assign');
var toString     = require('to-str');
var pickItem     = require('pick-item');
var randomHash   = require('random-hashtag');
var randomDomain = require('random-domains');


module.exports = function (options) {

  options = assign({
    protocol: '',
    domain: '',
    path: false,
    query: false,
    hash: false
  }, options);

  if (!options.protocol) {
    options.protocol = pickItem(['http', 'https']);
  }

  if (!options.domain) {
    options.domain = randomDomain();
  }

  var url   = options.protocol + '://www.' + options.domain;
  var path  = options.path ? toString(options.path) : '';
  var query = options.query ? toString(options.query) : '';
  var hash  = options.hash;

  if (hash === true) {
    hash = randomHash();
  }

  hash = hash ? toString(hash) : '';

  if (path) {

    if (path[0] === '/') {
      url += path;
    } else {
      url += '/' + path;
    }
  }

  if (query) {

    if (query[0] === '?') {
      url += query;
    } else {
      url += '?' + query;
    }
  }

  if (hash) {

    if (hash[0] === '#') {
      url += hash;
    } else {
      url += '#' + hash;
    }
  }

  return url;
};
