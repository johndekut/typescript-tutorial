//EXPLICIT TYPES
//initialize a variable, dont give it a value but in the future it will just take strings
let character :string;
let age: number;
let isLoggedIn: boolean;

//age = "kimani"
age = 34;
isLoggedIn= true;

//arrays
//declare a variable, let it recieve strings and initialzie it as an empty array
let ninjas: string[] = [];
//ninjas = [10, 34, 35]
ninjas = ["alex", "kim"]
ninjas.push("mark")
console.log(ninjas)


//union types - take more than one data type
let mixed :(string|number|boolean)[] = [];
mixed.push("kenneth", 34)
mixed.push(45)
mixed.push(true)
console.log(mixed);

let uid: string|number;
uid = 123;
uid= "wjywcwdcweyd"
console.log(uid)

//objects
let comrade : object;
comrade = {
  name: "jones",
  age:34,
  registrationDetails:{
    school: "dedan kimathi university",
    isStudent: true
  }
}
comrade= ["jim"]
console.log(comrade)

let comrade2 : {
  name:string,
  age: number,
  beltColor:string
}
comrade2 = {
  name:"james",
  age: 34,
  beltColor: "blue"
}