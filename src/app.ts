import { Invoice } from "./classes/invoice";

//instantiate and give values to c, d and a
const invOne = new Invoice('john', "work on the joetes wesbite", 76500)
const invTwo = new Invoice('kimani', "hosting of kims wesbite", 35500)

let invoices:Invoice[] = [];
//grabbing all elemsnts that need interactivity using their ids
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
  console.log(inv.client, inv.format());
});


document.addEventListener("DOMContentLoaded", () =>{
  const form = document.querySelector('.new-item-form') as HTMLFormElement ;

const type = document.querySelector('#type')as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;

form.addEventListener('submit', (e:Event) =>{
  e.preventDefault();

console.log(
  type.value,
  tofrom.value,
  details.value,
  amount.valueAsNumber
)
})
})

