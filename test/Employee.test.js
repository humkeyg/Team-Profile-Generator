const Employee = require("../lib/Employee");

test("Does this function return a name", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getName()).toBe("Frog Lady");
});

test("Does this function return an ID", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getId()).toBe(100);
});

test("Does this function return an email address", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getEmail()).toBe("froglady123@gmail.com");
});

test("Does this function return a role", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getRole()).toBe("Employee");
});
