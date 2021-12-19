const Manager = require('../lib/Manager.js');

// Class accepts destructured object (name, id, email, officenumber)
const testObject = {name: 'Dave', id: 223, email: "dave@email.com", officeNumber: "123"}

test('Checks for inherited Employee properties', () => {
    const manager = new Manager(testObject);
    expect(manager.name).toEqual(expect.any(String));
    console.log(`Manager name: ${manager.name}`)
    expect(manager.id).toEqual(expect.any(Number));
    console.log(`Manager id: ${manager.id}`)
    expect(manager.email).toEqual(expect.any(String));
    console.log(`Manager email: ${manager.email}`)
});
//checks get manager name
test('Gets managers name', () => {
    const manager = new Manager(testObject);
    expect(manager.getName()).toEqual(expect.any(String));
    console.log(`manager getName(): ${manager.getName()}`)
});
//checks get manager id
test('Gets managers id', () => {
    const manager = new Manager(testObject);
    expect(manager.getId()).toEqual(expect.any(String));
    console.log(`manager getId(): ${manager.getId()}`)
});
//checks get managers email
test('Gets managers email', () => {
    const manager = new Manager(testObject);
    expect(manager.getEmail()).toEqual(expect.any(String));
    console.log(`manager getEmail(): ${manager.getEmail()}`)
});
//checks get manager role
test('Gets managers role', () => {
    const manager = new Manager(testObject);
    expect(manager.getRole()).toBe('Manager');
    console.log(`manager getRole(): ${manager.getRole()}`)
});