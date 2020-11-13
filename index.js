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
      type: "input",
      message: "What license is you application under",
      name: "license",
    },
    {
      type: "input",
      message: "List all contributing parties.",
      name: "credit",
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
    fs.writeFile(
      "README.md",
      `
    #${res.title}

    ## Table of Contents
    
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Credits](#Credits)
    - [Tests](#Tests)
    - [Questions](#Questions)
    
    ## Description
    ${res.description}
    
    ## Installation
    ${res.install}
    ## Usage
    ${res.usage}
    ## License
    ${res.license}
    ## Credits
    ${res.credits}
    ## Tests
    ${res.test}
    ## Questions
    * GitHub Username: ${res.username}
    * Email: ${res.email}
    `,
      (err) => (err ? console.log(err) : console.log("Succes!"))
    );
  });
