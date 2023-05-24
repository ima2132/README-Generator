//include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const util = require('util');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
        {
          type: 'list',
          message: 'What kind of license should your project have?',
          name: 'license',
          choices: [
            { name: 'MIT', value: 'mit' },
            { name: 'Apache 2.0', value: 'apache-2.0' },
            { name: 'GPL 3.0', value: 'gpl-3.0' },
            { name: 'Boost 1.0', value: 'bsl-1.0' },
            { name: 'None', value: 'none' },
            { name: 'AGPL 3.0', value: 'agpl-3.0' },
            { name: 'LGPL 3.0', value: 'lgpl-3.0' },
            { name: 'MPL 2.0', value: 'mpl-2.0' },
            { name: 'Unlicense', value: 'unlicense' },
          ],
        },  
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any commands that should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any commands that should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const filePath = `./examples/${fileName}`;
    fs.writeFile(filePath, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// function to initialize application
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('SAMPLE-README.md', generateMarkdown(data));
    });
}

// function call to initialize application
init();