const Employee = require('../lib/Employee.js');

test('Checks for required Employee properties', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email: ${employee.email}`)
});