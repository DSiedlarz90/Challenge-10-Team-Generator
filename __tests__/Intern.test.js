const Intern = require('../lib/Intern.js');

// Class accepts destructured object (name, id, email, school)
const testObject = {name: 'Dave', id: 223, email: "dave@email.com", school: "UNC"}

test('Checks for inherited Employee properties', () => {
    const intern = new Intern(testObject);
    expect(intern.name).toEqual(expect.any(String));
    console.log(`Intern name: ${intern.name}`)
    expect(intern.id).toEqual(expect.any(Number));
    console.log(`Intern id: ${intern.id}`)
    expect(intern.email).toEqual(expect.any(String));
    console.log(`Intern email: ${intern.email}`)
});
