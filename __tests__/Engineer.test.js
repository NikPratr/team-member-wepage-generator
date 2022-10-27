const Engineer = require("../lib/Engineer");

test("Get role should return Engineer", () => {
    const role = "Engineer";
    const e = new Engineer("Nick", 5, "email@email.com");
    expect(e.getRole()).toBe(role);
});

test("Set job info for constructor", () => {
    const github = "github";
    const e = new Engineer("Nick", 5, "email@email.com", github);
    expect(e.github).toBe(github);
});

test("Get Github should return Github", () => {
    const github = "Github";
    const e = new Engineer("Nick", 5, "email@email.com", github);
    expect(e.getGithub()).toBe(github);
});