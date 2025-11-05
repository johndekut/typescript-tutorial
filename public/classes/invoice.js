export class Invoice {
    //this means that this class must follow the structure of the hasFormatter interface
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ksh${this.amount} for ${this.details}`;
    }
}
