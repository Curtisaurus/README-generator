// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: ['Apache', 'BSD', 'GNU', 'IBM', 'MIT', 'Mozilla'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownText = generateMarkdown(data)
    fs.writeFile(fileName, markdownText)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
