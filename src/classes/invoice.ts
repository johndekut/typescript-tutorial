import type { HasFormatter } from "../interfaces/hasFormatters";

export class Invoice implements HasFormatter{
  //this means that this class must follow the structure of the hasFormatter interface

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