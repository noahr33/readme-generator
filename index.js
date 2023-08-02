import fs from "fs";
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like your README title to be?'
    },
])
    .then(data => {
        console.log(data)
    })

// TODO: Create a function to write README file
fs.writeToFile(fileName, data)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
