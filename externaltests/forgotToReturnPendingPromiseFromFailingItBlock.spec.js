var expect = require('../');

it('should call the callback', function () {
    expect(function () {}, 'to call the callback');
    expect(true, 'to be falsy');
});
