const Intern = require("../lib/Intern");

test("Get role should return Intern", () => {
    const role = "Intern";
    const e = new Intern("Nick", 5, "email@email.com");
    expect(e.getRole()).toBe(role);
});

test("Set job info for constructor", () => {
    const school = "CWRU";
    const e = new Intern("Nick", 5, "email@email.com", school);
    expect(e.school).toBe(school);
});

test("Get job info should return school", () => {
    const school = "school";
    const e = new Intern("Nick", 5, "email@email.com", school);
    expect(e.getSchool()).toBe(school);
});