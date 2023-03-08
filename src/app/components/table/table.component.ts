import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Customer } from 'src/app/modules/customer.model';
import { Order } from 'src/app/modules/order.model';
import { TopCustomer } from 'src/app/modules/topCustomer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input('headData') headData : any = null;
  @Input('bodyDataList') bodyDataList : any = null;
  @Input('orderStatus') orderStatus:any = null;
  @Input('limit') limit : number;
  @Input('dataTable') dataTable : string;

  @ViewChild('showEdit') showEdit : ElementRef;
  @ViewChild('customerName') customerName : ElementRef;
  @ViewChild('customerEmail') customerEmail : ElementRef;
  @ViewChild('customerPhone') customerPhone : ElementRef;
  @ViewChild('customerOrder') customerOrder : ElementRef;
  @ViewChild('customerSpend') customerSpend : ElementRef;
  @ViewChild('customerLocation') customerLocation : ElementRef;

  @ViewChild('tableUser') tableUser : ElementRef;
  @ViewChild('tableTotalOrders') tableTotalOrders : ElementRef;
  @ViewChild('tableTotalSpending') tableTotalSpending : ElementRef;

  @ViewChild('tableOrderId') tableOrderId : ElementRef;
  @ViewChild('tableUserOrders') tableUserOrders : ElementRef;
  @ViewChild('tableTotalPrice') tableTotalPrice : ElementRef;
  @ViewChild('tableDate') tableDate : ElementRef;
  @ViewChild('tableStatus') tableStatus : ElementRef;

  public checkEdit = false;
  public idEdit :number;
  public idEditUser :string;

  public listCustomers : any = [];
  public listCustomerMain : any;
  public range : any = [];
  public pages : number ;
  public pageMain : number = 1;

  constructor(private customerService: CustomerService){};

  ngOnInit(){
    this.listCustomers = this.limit ? this.bodyDataList.slice(0,this.limit) : this.bodyDataList;

    if(this.limit)
      this.setLimit();
  }

  setPagemain(item : number){
    this.pageMain = item;

    const start = (item-1) * Number(this.limit);
    const end = start + Number(this.limit);
    this.listCustomers = this.bodyDataList.slice(start,end);
  }

  setLimit(){
    if(this.limit){
      let page = Math.floor(this.bodyDataList.length / Number(this.limit));
      this.pages = this.bodyDataList.length % Number(this.limit) === 0 ? page : page+1;
      this.range = [...Array(this.pages).keys()];
    }
  }

  addDataCustomer(){
    this.checkEdit = false;
    this.showEdit.nativeElement.classList.add(`active__${this.dataTable}`);
  }

  addActive(){
    console.log(this.bodyDataList);
    this.checkEdit = true;
    this.showEdit.nativeElement.classList.add(`active__${this.dataTable}`);
  }


  editDataCustomer(
    id: number,
    name:string,
    email:string,
    phone:string,
    total_orders:number,
    total_spend:string,
    location:string){
      this.idEdit = id;
      this.addActive();
      this.customerName.nativeElement.value = name;
      this.customerEmail.nativeElement.value = email;
      this.customerPhone.nativeElement.value = phone;
      this.customerOrder.nativeElement.value = total_orders;
      this.customerSpend.nativeElement.value = total_spend;
      this.customerLocation.nativeElement.value = location;
  }

  editDataTopCustomer(
    username: string,
    order:string,
    price:string){
      this.addActive();
      this.idEditUser = username;
      this.tableUser.nativeElement.value = username;
      this.tableTotalOrders.nativeElement.value = order;
      this.tableTotalSpending.nativeElement.value = price;
  }

  editDataOrder(
    id: string,
    user: string,
    date: string,
    price: string,
    status: string,
  ){
      this.addActive();
      this.idEditUser = id;
      this.tableOrderId.nativeElement.value = id;
      this.tableUserOrders.nativeElement.value = user;
      this.tableTotalPrice.nativeElement.value = date;
      this.tableDate.nativeElement.value = price;
      this.tableStatus.nativeElement.value = status;
  }

  closeShowEdit(){
    this.checkEdit = false;
    this.showEdit.nativeElement.classList.remove(`active__${this.dataTable}`);
    this.resetValueInput();
  }

  getIdNew(){
    let id = this.bodyDataList[0].id;
    for(let i = 1; i < this.bodyDataList.length; i++){
      if(id < this.bodyDataList[i].id){
        id = this.bodyDataList[i].id;
      }
    }

    return id+1;
  }

  resetValueInput(){
    this.customerName.nativeElement.value = "";
    this.customerEmail.nativeElement.value = "";
    this.customerPhone.nativeElement.value = "";
    this.customerOrder.nativeElement.value = "";
    this.customerSpend.nativeElement.value = "";
    this.customerLocation.nativeElement.value = "";

    this.tableUser.nativeElement.value = "";
    this.tableTotalOrders.nativeElement.value = "";
    this.tableTotalSpending.nativeElement.value = "";

    this.tableOrderId.nativeElement.value = "";
    this.tableUserOrders.nativeElement.value = "";
    this.tableTotalPrice.nativeElement.value = "";
    this.tableDate.nativeElement.value = "";
    this.tableStatus.nativeElement.value = "";
  }

  getItemId(id:number){
    const data = this.bodyDataList.find((item:any) => item.id === id);
    return this.bodyDataList.findIndex((item:any) => item.id === data.id);
  }

  getItemUserTop(id:string){
    const data = this.bodyDataList.find((item:any) => item.username === id);
    return this.bodyDataList.findIndex((item:any) => item.username === data.username);
  }

  getItemUserOrder(id:string){
    const data = this.bodyDataList.find((item:any) => item.id === id);
    return this.bodyDataList.findIndex((item:any) => item.id === data.id);
  }



  saveData(){
    let dataEdit : any;

    if(this.dataTable === "customer"){
      let idItem;
      if(this.checkEdit===true)
        idItem = this.idEdit;
      else
        idItem= this.getIdNew();

      const customer = new Customer(
        idItem,this.customerName.nativeElement.value,this.customerEmail.nativeElement.value,
        this.customerPhone.nativeElement.value,Number(this.customerOrder.nativeElement.value),
        this.customerSpend.nativeElement.value,this.customerLocation.nativeElement.value);

      dataEdit = customer.getDataEdit();
    }

    if(this.dataTable === "topcustomer"){

      const topcustomer = new TopCustomer(this.tableUser.nativeElement.value,
          this.tableTotalOrders.nativeElement.value, this.tableTotalSpending.nativeElement.value);

        dataEdit = topcustomer.getDataEdit();
    }

    if(this.dataTable === "order"){
      const order = new Order(this.tableOrderId.nativeElement.value,
        this.tableUserOrders.nativeElement.value, this.tableTotalPrice.nativeElement.value,
        this.tableDate.nativeElement.value, this.tableStatus.nativeElement.value);

        dataEdit = order.getDataEdit();
    }

    if(this.checkEdit===true){

      console.log(dataEdit);

      if(this.dataTable === "customer")
        this.bodyDataList[this.getItemId(this.idEdit)] = dataEdit;

      if(this.dataTable === "topcustomer")
        this.bodyDataList[this.getItemUserTop(this.idEditUser)] = dataEdit;

      if(this.dataTable === "order")
        this.bodyDataList[this.getItemUserOrder(this.idEditUser)] = dataEdit;

      this.setPagemain(this.pageMain);

      alert("Sửa dữ liệu thành công")

    }
    else{
      this.bodyDataList.push(dataEdit);
      this.setLimit();
      alert("Thêm dữ liệu thành công")
    }

    this.closeShowEdit();
    this.checkEdit = false;
    this.resetValueInput();
  }

  deleteDataCustomer(id?:any, top?:string){
    let dataToDelete;
    let index;

    if(id  && top=='top'){
      dataToDelete = this.bodyDataList.find((item:any) => item.username === id);
    }
    else if(id){
      dataToDelete = this.bodyDataList.find((item:any) => item.id === id);
      if(top=='order')
        index = this.getItemUserOrder(id);
      index = this.getItemId(id);
    }

    if (dataToDelete) {
      this.bodyDataList.splice(index, 1);
      if(this.limit){
        this.setPagemain(this.pageMain);
        this.setLimit();
      }
    }
  }

}
