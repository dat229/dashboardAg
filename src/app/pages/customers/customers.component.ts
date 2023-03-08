import { Component } from '@angular/core';
import customList from '../../../assets/JsonData/customers-list.json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  public headerCustom : any = null;
  public listCustomer : any = null;

  ngOnInit(){
    this.headerCustom = ["","name","email","phone","tatol order","total spend","location","Edit", "Delete"];
    this.listCustomer = customList;
  }
}
