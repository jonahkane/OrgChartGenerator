const generateTeam = (team) => {
    console.log(team);
    const html = [];
const addManager = manager => {
    console.log(manager);
    let managerHtml =  `
    <div class="card">
    <div class="card-header">
    <h2>${manager.name}</h2>
    <br />
    <h3>Manager</h3>

    </div>
    <ul>
        <li>ID: ${manager.empID}</li>
        <li>Email: <span id="email"><a href="mailto:${manager.email}">email</a></span></li>
        <li>Office Number: ${manager.office}</li>
    </ul>
</div>`;
html.push(managerHtml);
}
const addEngineer = engineer => {
    console.log(engineer);
    let engineerHtml = `
    <div class="card">
    <div class="card-header">
    <h2>${engineer.name}</h2>
    <br />
    <h3>Engineer</h3>
</div>

    <ul>
        <li>ID: ${engineer.empID}</li>
        <li>Email: <span id="email"><a href="mailto:${engineer.email}">email</a></span></li>
        <li>GitHub Username: <a target="_blank"  href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
</div>`;
html.push(engineerHtml);
}
const addIntern = intern => {
    console.log(intern);
    let internHtml = `
    <div class="card">
    <div class="card-header">
    <h2>${intern.name}</h2>
    <br />
    <h3>Intern</h3>   
    
    </div>
    <ul>
        <li>ID: ${intern.empID}</li>
        <li>Email: <span id="email"><a href="mailto:${intern.email}">email</a></span></li>
        <li>School name: ${intern.school}</li>
    </ul>
</div>`
html.push(internHtml);
}




for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        addManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        addEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        addIntern(team[i]);
    }
}

// join the HTML blocks
return html.join('');

}


module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Oranizational Chart</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main> ${generateTeam(team)} </main>
     
</body>
</html>
    `;
}
