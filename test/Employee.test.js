const Employee = require("../lib/Employee");

test("Does this return a new class object", () => {
    const emp = new Employee();
    expect(typeof emp).toBe("object");
});

test("Does this set a name in the new class", () => {
    const emp = new Employee("Frog Lady");
    expect(emp.name).toBe("Frog Lady");
});

test("Does this set an ID in the new class", () => {
    const emp = new Employee("Frog Lady", 2);
    expect(emp.id).toBe(100);
});

test("Does this set an Email in the new class", () => {
    const emp = new Employee("Frog Lady", 2, "froglady123@gmail.com");
    expect(emp.email).toBe("froglady123@gmail.com");
});

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
