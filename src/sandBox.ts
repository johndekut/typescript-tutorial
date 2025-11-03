//let greet = Function;
let greet  : (a: string, b:string) => void;
//a and b are just placeholders, i give them the value name and greeting in the function
 greet = (name:string, greeting:string) =>{
  // name= "John"
  // greeting = "how are you guys doing?"
  console.log(`${name} says ${greeting}`)
 }
 //below is called a fucntion signatuure
 let calc: (a:number, b:number, c:string) =>number;
 calc = (numOne: number, numTwo: number, action:string) =>{
  if(action === "add") {
    return numOne + numTwo;
  }else {
    return numOne - numTwo;
  }
 }


 let logDetails:(obj:{name:string, age:number}) =>void;

 type person= {name:string, age:number};//type alias
 logDetails = (student:person) =>{
  console.log(`${student.name} is ${student.age} years old`)
 }
 logDetails({name:"John", age:34})
