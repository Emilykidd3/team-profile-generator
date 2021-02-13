const Engineer = require('../lib/Engineer.js');

test('can instantiate a new instance', () => {
    const engineer = new Engineer();

    expect(typeOf(engineer)).toBe(expect.any(Object));
});

test('creates an engineer object', () => {
    const engineer = new Engineer('github');

    expect(engineer.github).toEqual(expect.any(String));
});