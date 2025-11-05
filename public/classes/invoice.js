export class Invoice {
    //shorthand when using access modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ksh${this.amount} for ${this.details}`;
    }
}
