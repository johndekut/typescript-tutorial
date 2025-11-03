//EXPLICIT TYPES
//initialize a variable, dont give it a value but in the future it will just take strings
var character;
var age;
var isLoggedIn;
//age = "kimani"
age = 34;
isLoggedIn = true;
//arrays
//declare a variable, let it recieve strings and initialzie it as an empty array
var ninjas = [];
//ninjas = [10, 34, 35]
ninjas = ["alex", "kim"];
ninjas.push("mark");
console.log(ninjas);
//union types - take more than one data type
var mixed = [];
mixed.push("kenneth", 34);
mixed.push(45);
mixed.push(true);
console.log(mixed);
var uid;
uid = 123;
uid = "wjywcwdcweyd";
console.log(uid);
//objects
var comrade;
comrade = {
    name: "jones",
    age: 34,
    registrationDetails: {
        school: "dedan kimathi university",
        isStudent: true
    }
};
comrade = ["jim"];
console.log(comrade);
var comrade2;
comrade2 = {
    name: "james",
    age: 34,
    beltColor: "blue"
};
