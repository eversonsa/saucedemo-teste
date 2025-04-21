// models/CheckoutModel.ts
export type CheckoutModelProps = {
    firstName: string;
    lastName: string;
    zipCode: string;
  };
  
  export class CheckoutModel {
    firstName: string;
    lastName: string;
    zipCode: string;
  
    constructor({ firstName, lastName, zipCode }: CheckoutModelProps) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.zipCode = zipCode;
    }
  }
  