const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('school');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school', () => {
    const intern = new Intern('school');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('creates role', () => {
    const intern = new Intern('school');

    expect(intern.getRole()).toBe("Intern");
});