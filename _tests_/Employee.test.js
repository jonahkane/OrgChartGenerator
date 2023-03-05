const Employee = require('../lib/Employee');
const employee = new Employee('Jonah', '9985', 'JonahTKane@gmail.com');

test('Test to see if we can get the constructor values for the employee data', () => {
    expect(employee.name).toBe('Jonah');
    expect(employee.id).toBe('9985');
    expect(employee.email).toBe('JonahTKane@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Jonah');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('9985');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('JonahTKane@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});