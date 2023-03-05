const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jonah', '9985', 'JonahTKane@gmail.com', 'JonahKane');

test('Test to see if we can get the constructor values for the engineer data', () => {
    expect(engineer.name).toBe('Jonah');
    expect(engineer.id).toBe('9985');
    expect(engineer.email).toBe('JonahTKane@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Jonah');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('9985');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('JonahTKane@gmail.com');
});
test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('JonahKane');
});
test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('engineer');
});