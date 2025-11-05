const jonte = {
    name: "john",
    age: 30,
    speak(words) {
        console.log(words);
    },
    spend(money) {
        console.log('i spent', money);
        return money;
    }
};
let kim = {
    name: "kimani",
    age: 50,
    speak(bless) {
        console.log(bless);
    },
    spend(amount) {
        console.log('i spent', amount);
        return amount;
    }
};
//using interface in a function
const greetPerson = (hanna) => {
    console.log('hello', hanna.name);
};
greetPerson(jonte);
console.log(jonte);
console.log(kim);
import { Invoice } from "./classes/invoice";
//instantiate and give values to c, d and a
const invOne = new Invoice('john', "work on the joetes wesbite", 76500);
const invTwo = new Invoice('kimani', "hosting of kims wesbite", 35500);
let invoices = [];
//grabbing all elemsnts that need interactivity using their ids
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.format());
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    });
});
