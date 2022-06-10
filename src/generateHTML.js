const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(employees) {
    let cards = []
    for (let i = 0; i < employees.length; i++) {
        const employeeArray = employees[i];
        switch (employeeArray.getRole()) {
            case 'Manager':
                const manager = new Manager(employeeArray.name, employeeArray.id, employeeArray.email, employeeArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(employeeArray.name, employeeArray.id, employeeArray.email, employeeArray.github);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(employeeArray.name, employeeArray.id, employeeArray.email, employeeArray.school);
                cards.push(generateInternCard(intern));
                break;
        }
    }
    return cards.join(``)
}

let generateManagerCard = (Manager) => {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
            <div class="card bg-info">
                <div class="card-header">
                    <h2>${Manager.getName()}</h2>
                    <h3>${Manager.getRole()}</h3>
                </div>
                <div class="card-body bg-body">
                    <ul class="card text">
                        <li>ID: ${Manager.getId()}</li>
                        <li>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                        <li>Office Number: ${Manager.getOfficeNumber()}${Manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
};

let generateEngineerCard = (Engineer) => {
    return `
         <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
             <div class="card bg-info">
                 <div class="card-header">
                     <h2>${Engineer.getName()}</h2>
                     <h3>${Engineer.getRole()}</h3>
                 </div>
                 <div class="card-body bg-body">
                     <ul class="card text">
                         <li>ID: ${Engineer.getId()}</li>
                         <li>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                         <li>Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                     </ul>
                 </div>
             </div>
         </div>`
};

let generateInternCard = (Intern) => {
    return `
    <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
        <div class="card bg-info">
                <div class="card-header">
                    <h2>${Intern.getName()}</h2>
                    <h3>${Intern.getRole()}</h3>
                </div>
                <div class="card-body bg-body">
                    <ul class="card text">
                        <li>ID: ${Intern.getId()}</li>
                        <li>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                        <li>School: ${Intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
};

function generateHTML(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
    </head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./resets.css"/>
    <link rel="stylesheet" href="./style.css"/>
    
    <body>
        <header class="jumbotron jumbotron-fluid">
            My Team
        </header>
        <section class="row justify-content-center">
        ${generateCards(employees)}
        </section>
    </body>
</html>
    `
}


module.exports = generateHTML;