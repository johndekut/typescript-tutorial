//classes
class Invoice {
    client;
    details;
    amount;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ksh${this.amount} for $this.details`;
    }
}
const invOne = new Invoice('john', "work on the joetes wesbite", 76500);
const invTwo = new Invoice('kimani', "hosting of kims wesbite", 35500);
let invoices = [];
//grabbing all elemsnts that need interactivity using their ids
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
export {};
