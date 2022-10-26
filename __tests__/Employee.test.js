const Employee = require("../lib/Employee");

test("Checking if employee is object", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
}); 

test("Set name for constructor", () => {
    const name = "Nick";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Set ID for constructor", () => {
    const id = 5;
    const e = new Employee("Nick", id);
    expect(e.id).toBe(id);
});

test("Set email for constructor", () => {
    const email = "email@email.com";
    const e = new Employee("Nick", 5, email);
    expect(e.email).toBe(email);
});

test("Get name via getName", () => {
    const name = "Nick";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Get ID via getId", () => {
    const id = 5;
    const e = new Employee("Nick", id);
    expect(e.getId()).toBe(id);
});

test("Get email via getEmail", () => {
    const email = "email@email.com";
    const e = new Employee("Nick", 5, email);
    expect(e.getEmail()).toBe(email);
});

test("Get role should return Employee", () => {
    const role = "Employee";
    const e = new Employee("Nick", 5, "email@email.com");
    expect(e.getRole()).toBe(role);
});