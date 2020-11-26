
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions =  [
    {
        type: "input",
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like to put in the description of your README?",
        name: "description"   
    },
    {
        type: "input",
        message: "Enter Installation requirements:",
        name: "installation"   
    },
     {
        type: "input",
        message: "Please list the project contributors.",
        name: "contributors"   
    },
    {
        type: "checkbox",
        message: "Please check the technologies that you used.",
        name: "technologies",
        choices: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "NODE.JS", "REACT", "BOOTSTRAP"]
    },
    {
        type: "input",
        message: "Please enter Usage:",
        name: "usage"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose the license that you would like to use",
        choices: ['Mit', 'Apache', 'GPL']
    },
    {
        type: "input",
        message: "Enter any tests:",
        name: "tests"
      },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, generateMarkdown(data));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        

       
        writeToFile("generated.md", answers);
      
    })
    

}
// function call to initialize program
init();
