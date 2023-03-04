class Engineer {
    constructor(name, ID, email, github) {
        this.name = name;
        this.empID = empID;
        this.email = email;
        this.github = github;
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
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;