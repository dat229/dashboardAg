export class TopCustomer{
  username: string;
  order:string;
  price:string;

  constructor(
    username:string,
    order:string,
    price:string)
  {
    this.username = username;
    this.order = order;
    this.price = price;
  }

  getDataEdit(): {
    username:string,
    order:string,
    price:string}{
      return {
        username :this.username,
        order : this.order,
        price : this.price
      }
    }
}
