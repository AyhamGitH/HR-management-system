'use strict';

function random(){
    return Math.floor(Math.random() * 501)
};

function unique(){
    return Math.floor(Math.random() * 9000 + 1000)
};

let Ghazi = {
    fullName : 'Ghazi Samer',
    employeeID : unique(),
    department : 'Administration',
    level : 'Senior',
    imageURL : null,
    salary : 1500 + random() ,
} 

console.table(Ghazi);
console.log(`net salary for Ghazi is: ${Ghazi.salary * 0.925}`);

let Lana = {
    fullName : 'Lana Ali',
    employeeID : Ghazi.employeeID + 1,
    department : 'Finance',
    level : 'Senior',
    imageURL : null,
    salary : 1500 + random() ,
} 
console.table(Lana);
console.log(`net salary for Lana is: ${Lana.salary * 0.925}`);

let Tamara = {
    fullName : 'Tamara Ayoub',
    employeeID : Ghazi.employeeID + 2,
    department : 'Marketing',
    level : 'Senior',
    imageURL : null,
    salary : 1500 + random() ,
} 
console.table(Tamara);
console.log(`net salary for Tamara is: ${Tamara.salary * 0.925}`);

let Safi = {
    fullName : 'Safi Walid',
    employeeID : Ghazi.employeeID + 3,
    department : 'Administration',
    level : 'Mid-Senior',
    imageURL : null,
    salary : 1000 + random() ,
} 
console.table(Safi);
console.log(`net salary for Safi is: ${Safi.salary * 0.925}`);

let Omar = {
    fullName : 'Omar Zaid',
    employeeID : Ghazi.employeeID + 4,
    department : 'Development',
    level : 'Senior',
    imageURL : null,
    salary : 1500 + random() ,
} 
console.table(Omar);
console.log(`net salary for Omar is: ${Omar.salary * 0.925}`);

let Rana = {
    fullName : 'Rana Saleh',
    employeeID : Ghazi.employeeID + 5,
    department : 'Development',
    level : 'Junior',
    imageURL : null,
    salary : 500 + random() ,
} 
console.table(Rana);
console.log(`net salary for Rana is: ${Rana.salary * 0.925}`);

let Hadi = {
    fullName : 'Hadi Ahmad',
    employeeID : Ghazi.employeeID + 6,
    department : 'Finance',
    level : 'Mid-Senior',
    imageURL : null,
    salary : 1000 + random() ,
} 
console.table(Hadi);
console.log(`net salary for Hadi is: ${Hadi.salary * 0.925}`);

const Employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi]

function representEmployee (Employees) {
    for (let index = 0; index < Employees.length; index++) {
        
        document.write(`Employee name: ${Employees[index].fullName}`);
        document.write(`<br>`);
        document.write(`Employee salary: ${Employees[index].salary}`);
        document.write(`<br>`);
        document.write(`<br>`);
        
    }
}
representEmployee(Employees);