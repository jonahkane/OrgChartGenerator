const Employee = require('./Employee');

class Intern extends Employee{
        constructor(name, empID, email, school){
            super(name, empID, email);
            this.school = school;
    }
getRole() {
    return "Intern";
}
getSchool() {
    return this.school;
}
    
}
module.exports = Intern;