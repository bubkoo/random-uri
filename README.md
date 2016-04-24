# random-uri

> Return a random url.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-uri/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-uri/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-uri)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-uri/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-uri)


## Install

```
$ npm install --save random-uri
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-uri/blob/master/test/spec/index.js)


```js
var randomUrl = require('random-uri');

// API
// - randomUrl(options)

// options
// - protocol
// - domain
// - path
// - query
// - hash


randomUrl();
// => http://www.ase.com

randomUrl({protocol: 'ftp'});
// => ftp://www.gjiis.cn

randomUrl({domain: 'example.com'});
// => http://www.example.cn

randomUrl({path: 'path/to/file'});
// => http://www.ttksd.cn?path/to/file

randomUrl({query: 'foo=bar&baz=qux'});
// => https://www.asdji.com?foo=bar&baz=qux

randomUrl({hash: 'readme'});
// => https://www.kjksiij.com#readme

randomUrl({hash: true});
// => https://www.jiwhahsud.com#llojsuchej

randomUrl({
    protocol: 'http',
    domain: 'example.com',
    path: 'path/to/file',
    query: 'foo=bar&baz=qux',
    hash: true
};

// http://example.com/path/to/file?foo=bar&baz=qux#ksijahs
```

## Related

- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld(Top Level Domain).
- [random-domains](https://github.com/mock-end/random-domains) - Return a random domain.
- [random-email](https://github.com/mock-end/random-email) - Return a random email.
- [random-protocol](https://github.com/mock-end/random-protocol) - Return a random protocol.
- [random-hashtag](https://github.com/mock-end/random-tld) - Return a random hashtag.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Return a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Return a random ipv6 address.
- [random-avatar](https://github.com/mock-end/random-avatar) - Return a URL to a random avatar from Gravatar.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-uri/issues/new).
