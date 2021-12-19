//global variables/imports
const inquirer = require('inquirer');
const fs = require('fs');
const EmployeeCard = require('./lib/Employee.js');
const EngineerCard = require('./lib/Engineer.js');
const InternCard = require('./lib/Intern.js');
const ManagerCard = require('./lib/manager.js')

//empty team member array
const teamMember = [];

//array of questions to create team members
const employee = [
    //question for employee's name with error control
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's first and last name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a first and last name!');
                return false;
            }
        }
    },
    //question for employee's id with error control
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their ID!');
                return false;
            }
        }
    },
    //question for employee's email with error control
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email!');
                return false;
            }
        }
    },
];

const manager = [
    //question for manager's name with error control
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's first and last name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a first and last name!');
                return false;
            }
        }
    },
    //question for manager's id with error control
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their ID!');
                return false;
            }
        }
    },
    //question for manager's email with error control
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email!');
                return false;
            }
        }
    },
    //question for manager's office number with error control
    {
        type: 'input',
        name: 'office',
        message: 'Please enter managers office number. (Required)',
        validate: managerInput => {
            if (managerInput) {
                return true;
            } else {
                console.log('Please provide the office number!');
                return false;
            }
        }
    },
];

const engineer = [
    //question for engineer's first and last name with error control
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's first and last name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a first and last name!');
                return false;
            }
        }
    },
    //question for engineer's id with error control
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their ID!');
                return false;
            }
        }
    },
    //question for individuals email with error control
    {
        type: 'input',
        name: 'email',
        message: "What is the engineerr's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email!');
                return false;
            }
        }
    },
    //question for engineer's github with error control.
    {
        type: 'input',
        name: 'github',
        message: "Please enter engineer's github username. (Required)",
        validate: engineerInput => {
            if (engineerInput) {
                return true;
            } else {
                console.log('Please provide the github username!');
                return false;
            }
        }
    },
]

const intern = [
    //question for intern's first and last name with error control
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's first and last name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a first and last name!');
                return false;
            }
        }
    },
    //question for intern's id with error control
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their ID!');
                return false;
            }
        }
    },
    //question for intern's email with error control
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email!');
                return false;
            }
        }
    },
    //question for intern's school with error control
    {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school. (Required)",
        validate: internInput => {
            if (internInput) {
                return true;
            } else {
                console.log('Please provide the interns school!');
                return false;
            }
        }
    },
]
//question to check if you want to add another member or be done
const addMember = [
    {
        type: 'list',
        name: 'new',
        message: 'Do you want to add a new member?',
        choices: [ "Add Another Member", "Build My Team"]
    },
];
//function to for what kind of member you want to add and runs whatever inquirer required per choice.
function newMember(addMember) {
    inquirer.prompt(addMember).then((answers) => {
        if (answers.new == 'Add Another Member') {
            inquirer.prompt(
                {
                    type: 'list',
                    name: 'type',
                    message: 'What new employee would you like to add?',
                    choices: [ "Manager", "Engineer", "Intern", "Employee"]
                }
            ).then((answers) => {
                if (answers.type == 'Manager') {
                    inquirer.prompt(manager).then((answers) => {
                        teamMember.push(answers);
                        teamMember.push('Manager')
                        newMember(addMember);
                    });
                }
                else if (answers.type == 'Engineer') {
                    inquirer.prompt(engineer).then((answers) => {
                        teamMember.push(answers);
                        teamMember.push('Engineer')
                        newMember(addMember);
                    });
                }
                else if (answers.type == 'Intern') {
                    inquirer.prompt(intern).then((answers) => {
                        teamMember.push(answers);
                        teamMember.push('Intern')
                        newMember(addMember);
                    });
                }
                else if (answers.type == 'Employee') {
                    inquirer.prompt(employee).then((answers) => {
                        teamMember.push(answers);
                        teamMember.push('Employee');
                        newMember(addMember);
                    });
                }
            });   
        } else {
            console.log(teamMember, teamMember.length)
            getCardHtml(teamMember);
        }
    });
}
//function for handling specific data swapping out within the HTML
function employeeSpecific(teamMember) {
    if (teamMember.office) {
        return '<li class="list-group-item">Office number: ' + `${teamMember.office}` + '</li>';
    }
    else if (teamMember.school) {
        return '<li class="list-group-item">School: ' + `${teamMember.school}` + '</li>';
    }
    else if (teamMember.github) {
        return `<li class="list-group-item">Github: <a href="https://www.github.com/${teamMember.github}" target="_blank">${teamMember.github}</a></li>`;
    } 
    else if (!teamMember.github || !teamMember.school || !teamMember.office) {
        return "";
    };
}
//htmlCards variable for newly created cards and function to create those cards.
let htmlCards = ""
function getCardHtml(teamMember) {
    for (i = 0; i < teamMember.length; i = i + 2) {
        htmlCards += `<div class="card bg-light justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header bg-primary">
                <h4>${teamMember[i].name}</h4>
            </div>
            <div class="col card-header bg-primary">
                <h4>${teamMember[i + 1]}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${teamMember[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${teamMember[i].email}">${teamMember[i].email}</a></li>
                ${employeeSpecific(teamMember[i])}
            </ul>
        </div > `;
    }
    console.log(htmlCards)
    writeHtml(htmlCards);
}

//function to write the html file.
function writeHtml(htmlCards) {
    let index = `
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                        <title>Document</title>
    <style>
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .card {
            border-radius: 6px;
            background-color: white;
            color: white;
            margin: 15px;
        }
        .text {
            border-radius: 6px;
            background-color: white;
            color: black;
            margin: 15px;
        }
        .col {
            flex: 1;
            text-align: center;
        }
    </style>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>My Team</h1>
            </span>
        </nav>
        <div class="row">
            ${htmlCards}
        </div>
    </body>
</html>`;
fs.writeFile('newfile.html', index, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});        
}



//function to start up program
function init(manager) {
    inquirer.prompt(manager).then((answers) => {
        if (answers) {
            teamMember.push(answers);
            teamMember.push('Manager')
            newMember(addMember); 
        }
    });
};

init(manager)



    