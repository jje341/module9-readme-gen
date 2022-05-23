function fileGenerator(response) {
    var content = `# ${response.title}
    ##### ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email}) 
    #### ReadMeGenerator© 2022 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).
    
    ## Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Usage)
    *[References](#Ref)
    * [Repositiory End-Goal Criterea](#Criterea)
    * [Future Project](#Future-Project)
    
    # Repository Description
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    ## User Story
    ### As the Quiz Administrator
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.   I a command-line application that accepts user input.
    2.   I want to be prompted for information about my application repository.
    3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
    4.   I want my project title to display as the title of the README.
    5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
    6.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
    7.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
    8.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.
    
     `
    return content;
};

module.exports = fileGenerator;