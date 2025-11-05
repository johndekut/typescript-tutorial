import type { HasFormatter } from "../interfaces/hasFormatters";

export class Payment implements HasFormatter{
 

  constructor(
    readonly recipient: string,
    private details : string,
    public amount: number

  ){
  
  }
  
  format() {
    return`${this.recipient} is owed ksh${this.amount} for ${this.details}`;
  }
}