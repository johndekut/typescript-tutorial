import { Invoice } from "./classes/invoice";
import { Payment } from "./classes/Payment";
//docOne and docTwo both implement th hasformatter interface
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("kamotho","web development", 170000 );
// docTwo = new Payment("maeriko","artistic dessign", 1790000 );
// let docs:HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
//instantiate and give values to c, d and a
// const invOne = new Invoice('john', "work on the joetes wesbite", 76500)
// const invTwo = new Invoice('kimani', "hosting of kims wesbite", 35500)
// let invoices:Invoice[] = [];
// //grabbing all elemsnts that need interactivity using their ids
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv =>{
//   console.log(inv.client, inv.format());
// });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let doc;
        if (type.value === 'invoice') {
            doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        console.log(doc);
    });
});
