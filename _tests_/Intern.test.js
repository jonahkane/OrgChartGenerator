const Intern = require('../lib/Intern');
const intern = new Intern('Jonah', '9985', 'JonahTKane@gmail.com', 'Creighton University');

test('Test to see if we can get the constructor values for the intern data', () => {
    expect(intern.name).toBe('Jonah');
    expect(intern.id).toBe('9985');
    expect(intern.email).toBe('JonahTKane@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jonah');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('9985');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('JonahTKane@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Creighton University');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('intern');
});