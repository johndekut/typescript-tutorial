import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
import type { HasFormatter } from "./interfaces/hasFormatters";


document.addEventListener("DOMContentLoaded", () =>{
  const form = document.querySelector('.new-item-form') as HTMLFormElement ;

const type = document.querySelector('#type')as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;


//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)
form.addEventListener('submit', (e:Event) =>{
  e.preventDefault(); //reloads by default

  let values:[string, string, number]
  values= [tofrom.value, details.value, amount.valueAsNumber]


  let doc: HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(...values)
  }else{
    doc = new Payment(...values)
  }
list.render(doc, type.value, 'end')
})
})

//GENERICS
const addUID = <T extends {name: string, age:number}>(obj: T) =>{
  let uid = Math.floor(Math.random() *100);
  return{...obj, uid};
}
let docOne = addUID({name:'John', age: 40});
// let docTwo = addUID()

console.log(docOne.age);

//ENUMS
enum ResourceType {Book= "BOOK", Author="AUTHOR", Film= "FILM",Director= "DIRECTOR", Starring="STARRING"}
//their indexes will be used, fisrt is index zero
//string enums dont turn into numbers


interface Resource <T>{
  uid: number;
  resourceType: ResourceType;
  data: T;
};

const docFour: Resource <string>= {
  uid: 1,
  resourceType: ResourceType.Film,
  data: "kawangware"
}

const docThree: Resource <string[]> = {
  uid: 6463,
  resourceType: ResourceType.Director,
  data: ["james", "alekoo", "Maeriko"]
}
console.log(docThree);
console.log(docFour);

//ENUMS in login

enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

function getMessage(status: Status) {
  if (status === Status.Success) return "Request successful!";
  if (status === Status.NotFound) return "Page not found.";
  return "Server error!";
}

console.log(getMessage(Status.NotFound));

//tuples --immutable arrays
let arr = ["jonte", 45, false];
arr[0] = 34;

console.log(arr)

let tup:[string, number, boolean] = ["kim", 45, false];
tup[0] = "james"

let student: [string, number]
student = ["chun-lee", 6765]