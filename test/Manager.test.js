const Manager = require("../lib/Manager");

test("Function returns office number", () => {
    const emp = new Manager("Mando", 1, "name.email", "officeNumber");
    expect(emp.getOfficeNumber()).toBe("officeNumber");
});

test("Function returns manager role", () => {
    const emp = new Manager("Korey", 1, "name.email", "officeNumber");
    expect(emp.getRole()).toBe("Manager");
});