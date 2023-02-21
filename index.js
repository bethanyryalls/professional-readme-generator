const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['MIT', 'GNU GPL 3.0', 'Apache 2.0', 'ISC', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for contributing to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests for your project:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// function to write README file
function writeToFile(fileName, answers) {
    // put file in README folder
    const filePath = `./README/${fileName}`;
    // if there is an error, log that error otherwise 'success'
    fs.writeFile(filePath, answers, (err) => err ? console.log(err) : console.log('File successfully written!')
    );
};

// function to initialize program
function init() {
    // ask questions
    inquirer.prompt(questions)
        .then(answers => {
            // content is answers
            const readmeContent = generateMarkdown(answers);
            //run write function using content and file name
            writeToFile('README.md', readmeContent);
        })
        // if error, log it
        .catch(error => {
            console.log(error);
        })
}

// function call to initialize program
init();