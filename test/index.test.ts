import testFunction from '../src/index';

test('Hello', () => {
  expect(testFunction()).toBe('Hello, ts-node-starter');
});
