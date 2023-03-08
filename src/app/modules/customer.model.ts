export class Customer {
  id:number;
  name:string;
  email:string;
  phone:string;
  total_orders:number;
  total_spend:string;
  location:string;

  constructor(
    id:number,
    name:string,
    email:string,
    phone:string,
    total_orders:number,
    total_spend:string,
    location:string){
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.total_orders = total_orders;
      this.total_spend = total_spend;
      this.location = location;
    }

  getDataEdit() : {
    id:number,
    name:string,
    email:string,
    phone:string,
    total_orders:number,
    total_spend:string,
    location:string}
    {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        total_orders: this.total_orders,
        total_spend: this.total_spend,
        location: this.location
      }
    }
}
