const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager(10);

    expect(manager.id).toEqual(expect.any(Number));
});

test('creates role', () => {
    const manager = new Manager(10);

    expect(manager.getRole()).toBe("Manager");
});