'use strict';

function random() {
    return Math.floor(Math.random() * 501)
};


function unique(){
    return Math.floor(Math.random() * 8994 + 1000)
};

const allStudents = [];

function student(name, id, dep, lev, image, sal) {
    this.fullName = name;
    this.employeeID = id;
    this.department = dep;
    this.level = lev;
    this.imageURL = image;
    this.salary = sal;
    allStudents.push(this);
}

student.prototype.renderStudents = function () {
        document.write(`Employee name: ${this.fullName}`);
        document.write(`<br>`);
        document.write(`Department: ${this.department}`);
        document.write(`<br>`);
        document.write(`Employee salary: ${this.salary}`);
        document.write(`<br>`);
        document.write(`<br>`);
}

let Ghazi = new student('Ghazi Samer', unique(), 'Administration', 'Senior', null, 1500 + random(),);
console.table(Ghazi);
console.log(`net salary for Ghazi is: ${Ghazi.salary * 0.925}`);

let Lana = new student('Lana Ali', Ghazi.employeeID + 1, 'Finance', 'Senior', null, 1500 + random(),);
console.table(Lana);
console.log(`net salary for Lana is: ${Lana.salary * 0.925}`);

let Tamara = new student('Tamara Ayoub', Ghazi.employeeID + 2, 'Marketing', 'Senior', null, 1500 + random(),);
console.table(Tamara);
console.log(`net salary for Tamara is: ${Tamara.salary * 0.925}`);

let Safi = new student('Safi Walid', Ghazi.employeeID + 3, 'Administration', 'Mid-Senior', null, 1000 + random(),);
console.table(Safi);
console.log(`net salary for Safi is: ${Safi.salary * 0.925}`);

let Omar = new student('Omar Zaid', Ghazi.employeeID + 4, 'Development', 'Senior', null, 1500 + random(),);
console.table(Omar);
console.log(`net salary for Omar is: ${Omar.salary * 0.925}`);

let Rana = new student('Rana Saleh', Ghazi.employeeID + 5, 'Development', 'Senior', null, 500 + random(),);
console.table(Rana);
console.log(`net salary for Rana is: ${Rana.salary * 0.925}`);

let Hadi = new student('Hadi Ahmad', Ghazi.employeeID + 6, 'Finance', 'Mid-Senior', null, 1000 + random(),);
console.table(Hadi);
console.log(`net salary for Hadi is: ${Hadi.salary * 0.925}`);

for (let i = 0; i < allStudents.length; i++){
    allStudents[i].renderStudents();
}




