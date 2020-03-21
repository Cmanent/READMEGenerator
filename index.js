var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")
const fs = require("fs")

function init() {
    inquirer
      .prompt([
        {
            type:"input",
            name:"username",
            message:"Type the User Name",

        },
        {
          type:"input",
          name:"projecttitle",
          message:"Please provide the Project Title",
        },
        {
          type:"input",
          name:"description",
          message:"Please provide a short description about you project",
        },
        { type:"input",
        name:"tableofcontents",
        message:"Provide the Table of Contents",
        },
        {
          type:"input",
          name:"installation",
          message:"What comments need to be ran to install?",
        },
        {
          type:"input",
          name:"usage",
          message:"What do you need to know about using the repo?",
        },
        {
          type: "list",
          name: "license",
          message: "What kind of license should your project have?",
          choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
          type:"input",
          name:"contributing",
          message:"What do you need to know about contributing to the repo?"
        },
        {
        type:"input",
        name:"test",
        message:"How do you test your code?",
},
      ])
      .then(answers => {
          console.log(answers)

        api.getUser(answers.username).then(function(github){
         // console.log(github)
         // console.log({...answers, ...github.data})
         var mdfile = generateMarkdown({...answers, ...github.data})
         console.log(mdfile)
         fs.writeFile("README.md", generateMarkdown({...answers, ...github.data}), function(err,data){
           console.log(err,data)
         })
        })
         // buildReadme(answers)
        // Use user feedback for... whatever!!
      })
      .catch(error => {
        if(error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
         } else {
      //     // Something else when wrong
         }
      });

    // inquirer (unsername)
    //At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// User GitHub profile picture


   
   
  
}

function buildReadme(inquirerRes){
    console.log(inquirerRes)
    api.getUser(inquirerRes.user).then(function(results){
        console.log(results.data)

 
   //    fs.writeFileSync("readme.md", generateMarkdown({...inquirerRes, ...results.data}))
})
}
init();
