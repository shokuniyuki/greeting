var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');
var greet = utils.load('./hello.js','greet');
var isTrue = utils.load('./hello.js', 'isTrue');
var arrName = utils.load('./hello.js', 'arrName')

test('outputs the correct string', () => {
  expect(hello()).toBe("Greetings Earthlings!");
});

it('return string', () => {
  expect(greet()).toBe('Hello!');
});

it('return true', () => {
  expect(isTrue()).toBe(true);
});

it('return array of names', () => {
  expect(arrName()).toEqual(['Sho', 'Landon', 'Paige'])
});