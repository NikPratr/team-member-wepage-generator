const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
var memberCards = "";

runQuestions();

function runQuestions() {
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
        },
        {
        type: "input",
        name: "id",
        message: "What is the team member's ID?",
        },
        {
        type: "input",
        name: "email",
        message: "What is the team member's email address?",
        },
        {
        type: "list",
        name: "position",
        message: "What is the team member's position?",
        choices: ["Manager", "Engineer", "Intern"],
        },


        {
            type: "input",
            name: "jobSpecific",
            message: "What is the the manager's office number?",
            when: (answers) => answers.position === "Manager",
        },
        {
            type: "input",
            name: "jobSpecific",
            message: "What is the the engineer's GitHub name?",
            when: (answers) => answers.position === "Engineer",
        },
        {
            type: "input",
            name: "jobSpecific",
            message: "What school does the intern attend?",
            when: (answers) => answers.position === "Intern",
        },
    ])
    .then((answers) => {
        const newMemberCard =
        `
        <div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h5 class="card-title text-white">${answers.name}</h5>
          <h6 class="card-subtitle mb-2 text-white">${answers.position}</h6>
        </div>
        
        <div class="card-body bg-light">
          <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: ${"<a href = 'mailto: '" + answers.email + ">" + answers.email + "</a>"}</li>
            <li class="list-group-item">${
                answers.position === "Manager" ? "Office number: " + answers.jobSpecific :
                answers.position === "Engineer" ? "Github: " + "<a href='https://www.github.com/" + answers.jobSpecific + "' target='_blank'>" + answers.jobSpecific + "</a>" :
                "School: " + answers.jobSpecific}</li>
          </ul>
        </div>
        </div>
        `;
        
        memberCards = memberCards + newMemberCard;
        repeatQuestions();

      });
}

function repeatQuestions() {
    inquirer.prompt([
            {
                type: "confirm",
                name: "new",
                message: "Would you like to add another team member?",
            }
    ])
    .then((answer) => {
        html =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Team Page</title>
</head>
<body style = "overflow-x: hidden">
    <header class="w-100 p-5 mb-4 text-center bg-danger text-white font-weight-bold">
        My Team
    </header>

    <section class="row d-flex justify-content-center">
    ${memberCards}
    </section>

</body>
</html>
`
        answer.new ? runQuestions() :
        fs.writeFile('my-team.html', html, (err) =>
        err ? console.log(err) : console.log('Your team webpage has been created!')
);
    })
}