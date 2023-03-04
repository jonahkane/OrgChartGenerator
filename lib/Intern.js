class Intern {
        constructor(name, ID, email, school){
        this.name = name;
        this.empID = empID;
        this.email = email;
        this.school = school;
    }
    getName() {
    return this.name;
}
getEmpID() {
    return this.empID;
}
getEmail() {
    return this.email;
}
getRole() {
    return "Intern";
}
getSchool() {
    return this.school;
}
    
}
module.exports = Intern;