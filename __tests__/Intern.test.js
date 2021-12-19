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
//checks get intern name
test('Gets interns name', () => {
    const intern = new Intern(testObject);
    expect(intern.getName()).toEqual(expect.any(String));
    console.log(`intern getName(): ${intern.getName()}`)
});
//checks get intern id
test('Gets interns id', () => {
    const intern = new Intern(testObject);
    expect(intern.getId()).toEqual(expect.any(String));
    console.log(`intern getId(): ${intern.getId()}`)
});
//checks get interns email
test('Gets interns email', () => {
    const intern = new Intern(testObject);
    expect(intern.getEmail()).toEqual(expect.any(String));
    console.log(`intern getEmail(): ${intern.getEmail()}`)
});
//checks get intern role
test('Gets interns role', () => {
    const intern = new Intern(testObject);
    expect(intern.getRole()).toBe('Intern');
    console.log(`intern getRole(): ${intern.getRole()}`)
});
