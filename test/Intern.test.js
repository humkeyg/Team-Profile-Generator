const Intern = require("../lib/Intern");

test("Does this return a school", () => {
    const emp = new Intern("Grogu", 3, "thechild@gmail.com", "Jedi Academy");
    expect(emp.getSchool()).toBe("Jedi Academy");
});

test("Does this return a role for Intern", () => {
    const emp = new Intern("Grogu", 3, "thechild@gmail.com", "Jedi Academy");
    expect(emp.getRole()).toBe("Intern");
});