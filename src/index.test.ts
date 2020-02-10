import testFunction from './index';

test('Hello', () => {
  expect(testFunction()).toBe('Hello, ts-node-starter');
});
