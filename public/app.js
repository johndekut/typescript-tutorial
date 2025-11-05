import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    //list template instance
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //reloads by default
        let doc;
        if (type.value === 'invoice') {
            doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        list.render(doc, type.value, 'end');
    });
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'John', age: 40 });
// let docTwo = addUID()
console.log(docOne.age);
;
const docThree = {
    uid: 6463,
    resourceName: "wooden cakes",
    data: ["james", "alekoo", "Maeriko"]
};
console.log(docThree);
