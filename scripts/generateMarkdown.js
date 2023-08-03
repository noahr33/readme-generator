// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export const renderLicenseBadge = (license) => {
  if (license === '') {
    return ""
  } else {

    console.log(license)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


export const generateMarkdown = ({title, description, installation, usage, license, contributions, tests }) => {
  
  return `# ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License

  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  ## How to Contribute
  
  ${contributions}
  
  ## Tests
  
  ## Questions

`
}


