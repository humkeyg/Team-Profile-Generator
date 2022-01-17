const Engineer = require("../lib/Engineer");

test("Does this return a Github user", () => {
    const emp = new Engineer("Peli", 4, "pelitattoine@gmail.com", "pelimotto");
    expect(emp.getGithub()).toBe("pelimotto");
});

test("Does this return a role for Engineer", () => {
    const emp = new Engineer("Peli", 4, "pelitattoine@gmail.com", "pelimotto");
    expect(emp.getRole()).toBe("Engineer");
});