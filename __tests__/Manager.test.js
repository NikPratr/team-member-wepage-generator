const Manager = require("../lib/Manager");

test("Get role should return Manager", () => {
    const role = "Manager";
    const e = new Manager("Nick", 5, "email@email.com");
    expect(e.getRole()).toBe(role);
});

test("Set job info for constructor", () => {
    const officeNum = "officeNum";
    const e = new Manager("Nick", 5, "email@email.com", officeNum);
    expect(e.office).toBe(officeNum);
});

test("Get officeNum should return officeNum", () => {
    const officeNum = "officeNum";
    const e = new Manager("Nick", 5, "email@email.com", officeNum);
    expect(e.getOfficeNum()).toBe(officeNum);
});