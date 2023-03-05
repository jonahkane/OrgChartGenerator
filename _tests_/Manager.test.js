const Manager = require('../lib/Manager');
const manager = new Manager('Jonah', '9985', 'JonahTKane@gmail.com', '2761');

test('Test to see if we can get the constructor values for the manager data', () => {
    expect(manager.name).toBe('Jonah');
    expect(manager.empID).toBe('9985');
    expect(manager.email).toBe('JonahTKane@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Jonah');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getempID()).toBe('9985');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('JonahTKane@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('2761');
});
test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});