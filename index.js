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
        type: 'list',
        name: 'license',
        message: 'Please select the license for your application.',
        choices: ['MIT','GPLv2','Apache','GPLv3', 'BSD 3-Clause', 'N/A']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can users contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does your application include tests? If so, also add instructions on how to test.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHib username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email if you would like users to contact you.'
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
