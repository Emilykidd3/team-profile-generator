const Manager = require('../lib/Manager.js');

test('can instantiate a new instance', () => {
    const manager = new Manager();

    expect(typeOf(manager)).toBe(expect.any(Object));
});

test('creates an Manager object', () => {
    const manager = new Manager(10);

    expect(manager.id).toEqual(expect.any(Number));
});