const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('name', 43, 'email', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github', () => {
    const engineer = new Engineer('name', 43, 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('creates role', () => {
    const engineer = new Engineer('name', 43, 'email', 'github');

    expect(engineer.getRole()).toBe('Engineer');
});