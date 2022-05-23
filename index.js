var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions to ask the user //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Enter a description for your project.",
        name: "description"
    },{
        type: "input",
        message: "Please enter installation instructions.",
        name: "installation"
    },{
        type: "input",
        message: "What is the inteded usage of this application?",
        name: "usage"
    },{
        type: "input",
        message: "Who else contributed to this project?",
        name: "participants"
    },{
        type: "list",
        name: "tools",
        message: "Please select which tool you used for this project.",
        choices : [
            "Node",
            "Javascript"
        ],
    },{
        type: "list",
        name: "tools",
        message: "Please select which tool you used for this project.",
        choices : [
            "Node",
            "Javascript"
        ],
    },{
        type: "input",
        message: "Please provide your email for questions about your application.",
        name: "email"

    },{
        type: "input",
        message: "Please provide Github link for repository.",
        name: "Github"
    }
];


// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} );