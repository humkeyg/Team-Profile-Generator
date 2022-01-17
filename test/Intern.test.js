const Intern = require("../lib/Intern");

test("Function returns school", () => {
    const emp = new Intern("Grogu", 3, "thechild@gmail.com", "Jedi Academy");
    expect(emp.getSchool()).toBe("Jedi Academy");
});

test("Function returns intern role", () => {
    const emp = new Intern("Grogu", 3, "thechild@gmail.com", "Jedi Academy");
    expect(emp.getRole()).toBe("Intern");
});