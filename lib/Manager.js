class Manager {
    constructor(name, ID, email, office){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office;
    }

getName() {
    return this.name;
}
getId() {
    return this.ID;
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