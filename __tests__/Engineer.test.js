const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('github');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github', () => {
    const engineer = new Engineer('github');

    expect(engineer.getRole()).toBe(Engineer);
});

test('creates role', () => {
    const engineer = new Engineer('github');

    expect(engineer.getRole()).toBe(Engineer);
});