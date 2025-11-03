let greet: Function;

greet = () =>{
  console.log("coding is fun until you run into a crazy bug!")
}

const add = (a: number , b:number, c: number|string =10) =>{
console.log(a + b);
console.log(c);
}
add(2, 4)


const minus = (a: number , b:number):number =>{
  return a+b
};
let result  = minus(10, 7) //result will infer the datatype from the return
console.log(result)