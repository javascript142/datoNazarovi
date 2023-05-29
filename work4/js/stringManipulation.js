let pasword = '966893';
console.log(pasword.slice(0,1) + sp)
//get a length of the string
console.log(pasword.length);

let userTopics = 'html,css,js,react';

// split the string into an array 

console.log(userTopics.split(',')); //
// slice the string 
console.log(pasword.slice(1,4)); //

// extract a substring 
console.log(pasword.substring(0,6));

// replace a string 
console.log(pasword.replace('966', '985'));
// replace all occurrences of a string
console.log(pasword.replace(/96/g, '99')); // regular expression variant
console.log(pasword.replaceAll(96, 97))

// convert to upper case 
console.log(pasword.toUpperCase());// changes the original string to upper case
// convert string to lower case 
console.log (pasword.toLowerCase());// changes the original string to lower case

// concstinate string 
console.log(pasword.concat('1234'));// changes the original string to
console.log(pasword + '1234');

let paswordWithSpaces = '  966893    ';
console.log( '= ' + paswordWithSpaces + '=');
console.log( '= ' + paswordWithSpaces.trim() + '=');
