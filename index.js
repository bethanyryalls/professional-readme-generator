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
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC']
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
        name: 'Questions',
        message: 'What can a user do if they have questions?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
