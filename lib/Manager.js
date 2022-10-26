const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, office) {
    super(name, id, email)
    this.office = office;
}

getRole() {
    return "Manager";
}

getGithub() {
    return this.manager;
}}


module.exports = Manager;