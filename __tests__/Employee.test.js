const Employee = require('../lib/Employee.js');

test('can instantiate a new instance', () => {
    const employee = new Employee();

    expect(typeOf(employee)).toBe(expect.any(Object));
});

test('creates an employee object', () => {
    const employee = new Employee('name', 54, 'email@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});