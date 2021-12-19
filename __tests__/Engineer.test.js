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
