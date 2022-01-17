const Engineer = require("../lib/Engineer");

test("Function returns github username", () => {
    const emp = new Engineer("Peli", 4, "pelitattoine@gmail.com", "pelimotto");
    expect(emp.getGithub()).toBe("pelimotto");
});

test("Function returns engineer role", () => {
    const emp = new Engineer("Peli", 4, "pelitattoine@gmail.com", "pelimotto");
    expect(emp.getRole()).toBe("Engineer");
});