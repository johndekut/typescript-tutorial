//type alias
type stringOrNum = string|number;
type objWithName = {name:string, uid:stringOrNum};


const greet = (user: objWithName) =>{
  console.log(`${user.name} says hello`)
};
const user = {
  name:"john",
  uid: 89
}
greet(user);


const add = (a: number , b:number, c: stringOrNum) =>{
console.log(a + b);
console.log(c);
}
add(2, 4, "hm")


const minus = (a: number , b:number):number =>{
  return a+b
};
let result  = minus(10, 7) //result will infer the datatype from the return
console.log(result)