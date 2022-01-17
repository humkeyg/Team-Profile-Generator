const Manager = require("../lib/Manager");

test("Does this return an office number", () => {
    const emp = new Manager("Mando", 1, "name.email", "officeNumber");
    expect(emp.getOfficeNumber()).toBe("officeNumber");
});

test("Does this return a role for Manager", () => {
    const emp = new Manager("Korey", 1, "name.email", "officeNumber");
    expect(emp.getRole()).toBe("Manager");
});