var expect = require('chai').expect;


describe('random-url: ', function () {

  var randomUrl = require('../../');

  it('randomUrl()', function () {
    expect(randomUrl()).to.be.a('string');
    expect(randomUrl('ftp')).to.be.a('string');
    expect(randomUrl('', 'foo=bar')).to.be.a('string');
    expect(randomUrl('', 'foo=bar', 'hashString')).to.be.a('string');
    expect(randomUrl('', '', 'hashString')).to.be.a('string');
  });
});
