export class Invoice {
//shorthand when using access modifiers
  constructor(
    readonly client: string,
    private details : string,
    public amount: number

  ){
  
  }
  
  format() {
    return`${this.client} owes ksh${this.amount} for ${this.details}`;
  }
}