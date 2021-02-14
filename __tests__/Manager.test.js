const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('name', 43, 'email', 10);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates an Manager object', () => {
    const manager = new Manager('name', 43, 'email', 10);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('creates role', () => {
    const manager = new Manager('name', 43, 'email', 10);

    expect(manager.getRole()).toBe("Manager");
});