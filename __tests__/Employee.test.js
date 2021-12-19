const Employee = require('../lib/Employee.js');
//checks that employee card is created in general
test('Checks for required Employee properties', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email: ${employee.email}`)
});
//checks get employee name
test('Gets employees name', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
    console.log(`Employee getName(): ${employee.getName()}`)
});
//checks get employee id
test('Gets employees id', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.getId()).toEqual(expect.any(String));
    console.log(`Employee getId(): ${employee.getId()}`)
});
//checks get employees email
test('Gets employees email', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(`Employee getEmail(): ${employee.getEmail()}`)
});
//checks get employee role
test('Gets employees role', () => {
    const employee = new Employee('Dave', 223,'dave@email.com');
    expect(employee.getRole()).toBe('Employee');
    console.log(`Employee getRole(): ${employee.getRole()}`)
});