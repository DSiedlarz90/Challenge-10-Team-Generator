const Engineer = require('../lib/Engineer.js');

// Class accepts destructured object (name, id, email, github)
const testObject = {name: 'Dave', id: 223, email: "dave@email.com", github: "dsiedlarz90"}

test('Checks for inherited Employee properties', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.name).toEqual(expect.any(String));
    console.log(`Engineer name: ${engineer.name}`)
    expect(engineer.id).toEqual(expect.any(Number));
    console.log(`Engineer id: ${engineer.id}`)
    expect(engineer.email).toEqual(expect.any(String));
    console.log(`Engineer email: ${engineer.email}`)
});
//checks get engineer name
test('Gets engineers name', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getName()).toEqual(expect.any(String));
    console.log(`engineer getName(): ${engineer.getName()}`)
});
//checks get engineer id
test('Gets engineers id', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getId()).toEqual(expect.any(String));
    console.log(`engineer getId(): ${engineer.getId()}`)
});
//checks get engineers email
test('Gets engineers email', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getEmail()).toEqual(expect.any(String));
    console.log(`engineer getEmail(): ${engineer.getEmail()}`)
});
//checks get engineer role
test('Gets engineers role', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getRole()).toBe('Engineer');
    console.log(`engineer getRole(): ${engineer.getRole()}`)
});