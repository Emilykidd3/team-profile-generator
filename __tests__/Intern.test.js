const Intern = require('../lib/Intern.js');

test('can instantiate a new instance', () => {
    const intern = new Intern();

    expect(typeOf(intern)).toBe(expect.any(Object));
});

test('creates an Intern object', () => {
    const intern = new Intern('school');

    expect(intern.school).toEqual(expect.any(String));

});