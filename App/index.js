// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownFunctions = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'author',
        message: 'Who is the author of this Project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the program/application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ["GPL v3", "IPL 1.0", "ISC", "MIT", "MPL 2.0", "ODbL", "WTFPL", "None", new inquirer.Separator()]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the project?',
    },
  
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    markdownFunctions.renderLicenseBadge(answers.license);
    markdownFunctions.renderLicenseLink(answers.license);
    markdownFunctions.renderCompleteLicenseHeader(answers.license, markdownFunctions.renderLicenseBadge(), markdownFunctions.renderLicenseLink());
    markdownFunctions.renderLicenseSection(answers.license);    
        fs.writeFile('ReadMe.md', markdownFunctions.generateMarkdown (answers.title, markdownFunctions.renderCompleteLicenseHeader(), answers.description, answers.installation, answers.usage, markdownFunctions.renderLicenseSection(), answers.contributing, answers.tests, answers.github, answers.email, answers.author), (error) => 
        error ? console.error(error) : console.log('You have successfully created a ReadMe file')) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
}

// Function call to initialize app
init();
