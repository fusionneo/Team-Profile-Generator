const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

let employeesArray  = [];

const questionManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "officeNumber",
        },
        {
            type: "list",
            message: "Select the employee role you would like to create next:",
            choices: ["Engineer", "Intern", "Finished"],
            name: "nextEmployee",
        }
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        employeesArray.push(manager)
        switch(managerAnswers.nextEmployee) {
            case "Engineer":
                questionEngineer();
                break;
            case "Intern":
                questionIntern();
                break;
            default:
                writeToFile("dist/index.html", generateHTML(employeesArray))
        }
    });
};

const questionEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's Github user name?",
            name: "github",
        },
        {
            type: "list",
            message: "Select the employee role you would like to create next:",
            choices: ["Engineer", "Intern", "Finished"],
            name: "nextEmployee",
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        employeesArray.push(engineer)
        switch(engineerAnswers.nextEmployee) {
            case "Engineer":
                questionEngineer();
                break;
            case "Intern":
                questionIntern();
                break;
            default:
                writeToFile("dist/index.html", generateHTML(employeesArray))
        }
    });
};

const questionIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern\"s name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the intern ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the school name?",
            name: "school",
        },
        {
            type: "list",
            message: "Select the employee role you would like to create next:",
            choices: ["Engineer", "Intern", "Finished"],
            name: "nextEmployee",
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        employeesArray.push(intern)
        switch(internAnswers.nextEmployee) {
            case "Engineer":
                questionEngineer();
                break;
            case "Intern":
                questionIntern();
                break;
            default:
                writeToFile("dist/index.html", generateHTML(employeesArray))
        }
    })
};

questionManager();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log("Team file successfully generated!")
    })
}