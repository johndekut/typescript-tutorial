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

  let doc: HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
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

//GENERICS WITH INTERFACES
//data could be anything, not specified
interface Resource <T>{
  uid: number;
  resourceName: string;
  data: T;
};

const docThree: Resource <string[]> = {
  uid: 6463,
  resourceName: "wooden cakes",
  data: ["james", "alekoo", "Maeriko"]
}
console.log(docThree);