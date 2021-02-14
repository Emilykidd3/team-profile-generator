const { isTemplateElement } = require("@babel/types")

const makeManagerCard = (manager) => {
    return `
    <div class="card mb-3 mt-5" style="width: 300px; max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3>${manager.getName()}</h3>
            <h5>${manager.getRole()}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${manager.getId()} </br> 
            Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a> </br> 
            Office Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `
}

const makeEngineerCard = (engineer) => {
    return `
    <div class="card mb-3 mt-5" style="width: 300px; max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3>${engineer.getName()}</h3>
            <h5>${engineer.getRole()}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.getId()} </br> 
            Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a> </br> 
            Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
        </div>
    </div>
    `
}

const makeInternCard = (intern) => {
    return `
    <div class="card mb-3 mt-5" style="width: 300px; max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3>${intern.getName()}</h3>
            <h5>${intern.getRole()}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${intern.getId()} </br> 
            Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a> </br> 
            School: ${intern.getSchool()}</p>
        </div>
    </div>
    `
}

const makeCards = (employeeArr) => {
    const cardsToAdd = [];

    const managerArr = employeeArr.filter(function(employee) {
        if (employee.getRole() === 'Manager') {
            return employee;
        } 
    })

    const engineerArr = employeeArr.filter(function(employee) {
        if (employee.getRole() === 'Engineer') {
            return employee;
        }
    })

    const internArr = employeeArr.filter(function(employee) {
        if (employee.getRole() === 'Intern') {
            return employee;
        }
    })

    cardsToAdd.push(managerArr.map(manager => {
        return (makeManagerCard(manager));
    }))

    cardsToAdd.push(engineerArr.map(engineer => {
        return (makeEngineerCard(engineer));
    }).join(""))

    cardsToAdd.push(internArr.map(intern => {
        return (makeInternCard(intern));
    }).join(""))
    
    console.log(cardsToAdd);
    cardsToAdd.join("");
    return cardsToAdd;
}

const writePage = function(employeeArr) {
    console.log(employeeArr);

    // destructure answers


    // put "html" in here with ${ex: manager.getName()} for question answers
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>Team Portfolio</title>
</head>
<body>
    <header>
        <div>
            <h1 class="mt-3 text-center">My Team</h1>
        </div>
    </header>

<main>
    <div class="d-flex justify-content-center">
        ${makeCards(employeeArr)}
    </div>
</main>

</body>
</html>
    `
}

module.exports = writePage;