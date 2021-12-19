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