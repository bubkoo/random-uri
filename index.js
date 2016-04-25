'use strict';

var assign        = require('object-assign');
var isObject      = require('is-object');
var toString      = require('to-str');
var pickItem      = require('pick-item');
var randomHash    = require('random-hashtag');
var randomLorem   = require('random-lorem');
var randomDomain  = require('random-domains');
var randomNatural = require('random-natural');


module.exports = function (options) {

  options = assign({
    protocol: '',
    domain: '',
    path: false,
    extensions: false,
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
  var query = options.query ? options.query : '';
  var hash  = options.hash;


  if (!path) {
    var paths = [];
    var count = randomNatural({ min: 1, max: 5, inspected: true });

    while (count--) {
      paths.push(randomLorem());
    }

    path = paths.join('/');
  }

  if (path[0] === '/') {
    url += path;
  } else {
    url += '/' + path;
  }


  var extension;
  if (options.extensions) {
    if (typeof options.extensions === 'string') {
      extension = options.extensions;
    } else {
      extension = pickItem(options.extensions);
    }
  }

  if (extension) {
    if (extension[0] !== '.') {
      extension = '.' + extension;
    }
    url += extension;
  }


  if (isObject(query)) {
    var q = [];
    for (var key in query) {
      q.push(key + '=' + query[key]);
    }
    query = q.join('&');
  }

  query = toString(query);

  if (query) {
    if (query[0] === '?') {
      url += query;
    } else {
      url += '?' + query;
    }
  }


  if (hash === true) {
    hash = randomHash();
  }

  hash = hash ? toString(hash) : '';

  if (hash) {

    if (hash[0] === '#') {
      url += hash;
    } else {
      url += '#' + hash;
    }
  }

  return url;
};
