const Employee = require("../lib/Employee");

test("Function returns employee name", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getName()).toBe("Frog Lady");
});

test("Function returns employee ID", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getId()).toBe(2);
});

test("Function returns employee email address", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getEmail()).toBe("froglady123@gmail.com");
});

test("Function returns employee role", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.getRole()).toBe("Employee");
});
