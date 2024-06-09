const inquirer = require('inquirer');
const fs = require('fs');
const maxLengthPrompt = require('inquirer-maxlength-input-prompt')
const shapes = require('./generateShapes');

inquirer.registerPrompt('maxlength-input', maxLengthPrompt)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter text:',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter a text color (or hexadceminal code):'
    },
    {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter a shape color (or hexadceminal code):'
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, content) {
    fs.writeFile(filename, content, err => {
        if (err)
            console.log('Error:', err);
        else
            console.log('Generated logo.svg');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        let generatedShape;
        switch (data.shape) {
            case 'circle':
                generatedShape = shapes.generateCircle(data);
                break;
            case 'square':
                generatedShape = shapes.generateSquare(data);
                break;
            case 'triangle':
                generatedShape = shapes.generateTriangle(data);
                break;
            default:
                console.log('Invalid shape');
        }
        writeToFile("logo.svg", generatedShape);
    });
}

// Function call to initialize app
init();