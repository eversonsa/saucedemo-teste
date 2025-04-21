export type ProductModelProps = {
    name: string;
    price: string;
  };
  
  export class ProductModel {
    openCart() {
        throw new Error('Method not implemented.');
    }
    name: string;
    price: string;
  
    constructor({ name, price }: ProductModelProps) {
      this.name = name;
      this.price = price;
    }
  }
  