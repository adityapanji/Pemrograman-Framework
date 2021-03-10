let fname = 'Cristian';
let lname = 'Ronaldo';
let age   = prompt("Masukkan umur Cristiano Ronaldo!");

//cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

//Memakai template string
let result = `${fname} ${lname} is ${age} years old`;
alert(result);