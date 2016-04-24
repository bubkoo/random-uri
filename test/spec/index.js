var expect = require('chai').expect;


describe('random-url: ', function () {

  var randomUrl = require('../../');

  it('common', function () {

    expect(randomUrl()).to.be.a('string');

    expect(randomUrl({
      protocol: 'ftp'
    }))
      .to.be.match(/^ftp:\/\/www\./);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com'
    }))
      .to.be.match(/^http:\/\/www\.example\.com/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: 'path/to/file'
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: '/path/to/file'
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: 'path/to/file',
      query: 'foo=bar&baz=qux'
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file\?foo=bar&baz=qux/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: 'path/to/file',
      query: '?foo=bar&baz=qux'
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file\?foo=bar&baz=qux/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: 'path/to/file',
      query: 'foo=bar&baz=qux',
      hash: '111'
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file\?foo=bar&baz=qux#111/);

    expect(randomUrl({
      protocol: 'http',
      domain: 'example.com',
      path: 'path/to/file',
      query: 'foo=bar&baz=qux',
      hash: true
    }))
      .to.be.match(/^http:\/\/www\.example\.com\/path\/to\/file\?foo=bar&baz=qux#/);
  });
});
