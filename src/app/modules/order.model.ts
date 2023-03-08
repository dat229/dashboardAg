export class Order{
  id: string;
  user: string;
  date: string;
  price: string;
  status: string;

  constructor(
    id: string,
    user: string,
    date: string,
    price: string,
    status: string,
  ){
    this.id = id;
    this.user = user;
    this.date = date;
    this.price = price;
    this.status = status;
  }

  getDataEdit() : {
    id: string,
    user: string,
    date: string,
    price: string,
    status: string,
  }{
    return {
      id: this.id,
      user: this.user,
      date: this.date,
      price: this.price,
      status: this.status
    }
  }
}
