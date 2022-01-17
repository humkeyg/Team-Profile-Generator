const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./src/generateTeam");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const express = require("express");
const app = express();

const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "index.html");

const { writeFile } = require("./src/utils");

const teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    message: "Team manager's name:",
    name: "name",
  },

  {
    type: "input",
    message: "Team manager's employee ID:",
    name: "id",
  },

  {
    type: "input",
    message: "Team manager's email address:",
    name: "email",
  },

  {
    type: "input",
    message: "Team manager's office number:",
    name: "number",
  },

  {
    type: "list",
    message: "Add new team member or finish building team:",
    name: "team",
    choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Engineer's name:",
    name: "name",
  },

  {
    type: "input",
    message: "Engineer's employee ID:",
    name: "id",
  },

  {
    type: "input",
    message: "Engineer's email address:",
    name: "email",
  },

  {
    type: "input",
    message: "Engineer's Github username:",
    name: "github",
  },

  {
    type: "list",
    message: "Add new team member or finish building team:",
    name: "team",
    choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Intern's name:",
    name: "name",
  },

  {
    type: "input",
    message: "Intern's employee ID:",
    name: "id",
  },

  {
    type: "input",
    message: "Intern's email address?",
    name: "email",
  },

  {
    type: "input",
    message: "Intern's school name:",
    name: "school",
  },

  {
    type: "list",
    message: "Add new team member or finish building team:",
    name: "team",
    choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
  },
];

function addNewEmployee(team) {

  if (team === "Add Engineer") {

    inquirer.prompt(engineerQuestions).then((answers) => {
      console.log(answers);

      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      teamMembers.push(engineer);
      addNewEmployee(answers.team);

    });

  } else if (team === "Add Intern") {

    inquirer.prompt(internQuestions).then((answers) => {

      console.log(answers);

      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );

      teamMembers.push(intern);
      addNewEmployee(answers.team);

    });

  } else {
    console.log("Team profile successfully created");
    let teamString = generateHTML(teamMembers);
    writeFile(teamString);
  }
}

function init() {

  inquirer.prompt(managerQuestions).then((answers) => {
    
    console.log(answers);

    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.number
    );

    teamMembers.push(manager);
    addNewEmployee(answers.team);
    
  });
}

init();
