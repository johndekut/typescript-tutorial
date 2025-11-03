//DYNAMIC TYPES, ANYTYPE
let age: any = 25;

age = true;
console.log(age)

age= 34;
console.log(age)
age= "many years"
console.log(age)
age= {
  name: "kimdee", 
  age: 34
}
console.log(age)

let mixed: any[] =[];
mixed.push(5)
mixed.push("kim")
mixed.push([45, 46, 67])
mixed.push(false)
console.log(mixed)


let vampire : {name:any, age:any}
vampire = {
  name:34,
  age:"hwjfyryh" 
}