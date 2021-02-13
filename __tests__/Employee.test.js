const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('can instantiate a new instance', () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
});

test('creates an employee object', () => {
    const employee = new Employee('name', 54, 'email@yahoo.com');

    expect(employee.name).toBe('name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@/);
});

test('checks if getName method returns name', () => {
    const employee = new Employee('name', 54, 'email@yahoo.com');

    expect(employee.getName()).toBe('name');
});

test('checks if getId method returns id', () => {
    const employee = new Employee('name', 54, 'email@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('checks if getEmail method returns email', () =>{
    const employee = new Employee('name', 54, 'email@yahoo.com');
    
    expect(employee.getEmail()).toMatch(/@/);
});

test('checks if getRole ', () =>{
    const employee = new Employee('name', 54, 'email@yahoo.com');

    expect(employee.getRole()).toBe('Employee');
});