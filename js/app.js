'use strict';

const allStudents = [];

function student(name, id, dep, lev, image, sal) {
    this.fullName = name;
    this.employeeID = id;
    this.department = dep;
    this.level = lev;
    this.imageURL = image;
    this.salary = sal;
    this.random = function() {
        this.salary = this.salary + Math.floor(Math.random() * 501)
    }
    this.unique = function() {
        this.employeeID = Math.floor(Math.random() * 8994 + 1000)
    }
    allStudents.push(this);
}

student.prototype.renderStudents = function () {

    let cardE = document.createElement('div');
    cardE.setAttribute("class","card");
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(cardE);

    let imgE = document.createElement('img');
    imgE.setAttribute("class","img");
    imgE.src=this.imageURL;
    imgE.alt=this.fullName;
    cardE.appendChild(imgE);

    let divE = document.createElement('div');
    divE.setAttribute("class","div1");
    cardE.appendChild(divE);

    let pE = document.createElement('p');
    divE.textContent = `Name: ${this.fullName} - ID: ${this.employeeID} -
    Department: ${this.department} - Level: ${this.level} -
    Employee salary: ${this.salary}`
    divE.appendChild(pE);
}

student.prototype.renderStudents2 = function () {

    let cardE = document.createElement('div');
    cardE.setAttribute("class","card2");
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(cardE);

    let imgE = document.createElement('img');
    imgE.setAttribute("class","img");
    imgE.src=this.imageURL;
    imgE.alt=this.fullName;
    cardE.appendChild(imgE);

    let divE = document.createElement('div');
    divE.setAttribute("class","div1");
    cardE.appendChild(divE);

    let pE = document.createElement('p');
    divE.textContent = `Name: ${this.fullName} - ID: ${this.employeeID} -
    Department: ${this.department} - Level: ${this.level} -
    Employee salary: ${this.salary}`
    divE.appendChild(pE);
}

let Ghazi = new student('Ghazi Samer', 0, 'Administration', 'Senior', 'assests/ghazi.jpg', 1500,);
Ghazi.random();
Ghazi.unique();
console.table(Ghazi);
console.log(`net salary for Ghazi is: ${Ghazi.salary * 0.925}`);

let Lana = new student('Lana Ali', Ghazi.employeeID + 1, 'Finance', 'Senior', 'assests/lana.jpg', 1500,);
Lana.random();
console.table(Lana);
console.log(`net salary for Lana is: ${Lana.salary * 0.925}`);

let Tamara = new student('Tamara Ayoub', Ghazi.employeeID + 2, 'Marketing', 'Senior', 'assests/tamara.jpg', 1500,);
Tamara.random();
console.table(Tamara);
console.log(`net salary for Tamara is: ${Tamara.salary * 0.925}`);

let Safi = new student('Safi Walid', Ghazi.employeeID + 3, 'Administration', 'Mid-Senior', 'assests/safi.jpg', 1000,);
Safi.random();
console.table(Safi);
console.log(`net salary for Safi is: ${Safi.salary * 0.925}`);

let Omar = new student('Omar Zaid', Ghazi.employeeID + 4, 'Development', 'Senior', 'assests/omar.jpg', 1500,);
Omar.random();
console.table(Omar);
console.log(`net salary for Omar is: ${Omar.salary * 0.925}`);

let Rana = new student('Rana Saleh', Ghazi.employeeID + 5, 'Development', 'Junior', 'assests/rana.jpg', 500,);
Rana.random();
console.table(Rana);
console.log(`net salary for Rana is: ${Rana.salary * 0.925}`);

let Hadi = new student('Hadi Ahmad', Ghazi.employeeID + 6, 'Finance', 'Mid-Senior', 'assests/hadi.jpg', 1000,);
Hadi.random();
console.table(Hadi);
console.log(`net salary for Hadi is: ${Hadi.salary * 0.925}`);

for (let i = 0; i < 3; i++){
    allStudents[i].renderStudents();
}

for (let i = 3; i < 7; i++){
    allStudents[i].renderStudents();
}

