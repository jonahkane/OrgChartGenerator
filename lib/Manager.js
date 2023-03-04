class Manager {
    constructor(name, empID, email, office){
        this.name = name;
        this.empID = empID;
        this.email = email;
        this.office = office;
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
getOffice() {
    return this.office;
}
getRole() {
    return "Manager";
}}
module.exports = Manager;