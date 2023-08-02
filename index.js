import fs from "fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./scripts/generateMarkdown.js";

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like your README title to be?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the program.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can users contribute?'
    }
])
    .then(data => {
        const md = generateMarkdown(data)
        fs.writeFile(`./scripts/${data.title}.md`,
        md, err => {
            if (err) {
                throw err
            }
            console.log(`${data.title}.md saved!`)
        })
    })

// // TODO: Create a function to write README file
// fs.writeToFile(fileName, data)

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
