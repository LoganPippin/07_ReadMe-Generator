const inquirer = require("inquirer");
const fs = require("fs");
const { connected } = require("process");

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
  .prompt([
    {
      type: "input",
      message: "What is The Title of Your Project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a Description of Your Project?",
      name: "description",
    },
    {
      type: "input",
      message: "add any and all installation instructions.",
      name: "install",
    },
    {
      type: "input",
      message: "Enter all usage information.",
      name: "usage",
    },
    {
      type: "list",
      message: "What license is you application under",
      name: "license",
      choices: [
        "MIT",
        "GNU--AGPLv3",
        "GNU--GPLv3",
        "GNU--LGPLv3",
        "MPL--2.0",
        "Apache--2.0",
        "BSL--1.0",
      ],
    },
    {
      type: "input",
      message: "List all contributing details",
      name: "contribute",
    },
    {
      type: "input",
      message: "What are the Testing Insructions.",
      name: "test",
    },
    {
      type: "input",
      message: "GitHub Username",
      name: "username",
    },
    {
      type: "input",
      message: "Email",
      name: "email",
    },
  ])
  .then((res) => {
    const file = `
  # ${res.title}

  ## Table of Contents
    
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)
    
  ## Description
  ${res.description}
    
  ## Installation
  ${res.install}

  ## Usage
  ${res.usage}

  ## License
  ![${res.license}](https://img.shields.io/badge/license-${res.license}-brightgreen)

  ## Contributing
  ${res.contribute}

  ## Tests
  ${res.test}
  
  ## Questions
  * GitHub Username: [${res.username}](github.com/${res.username})
  * Email: ${res.email}`;

    fs.writeFile("README.md", file, (err) =>
      err ? console.log(err) : console.log("Succes!")
    );
  });
