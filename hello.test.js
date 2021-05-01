var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');
var greet = utils.load('./hello.js','greet');

test('outputs the correct string', () => {
  expect(hello()).toBe("Greetings Earthlings!");
});

it('return string', () => {
  expect(greet()).toBe('Hello!');
});