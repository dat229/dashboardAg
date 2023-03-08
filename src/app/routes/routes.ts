import { Routes } from "@angular/router";
import { CustomersComponent } from "../pages/customers/customers.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

export const Routers : Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: "**",
    component: DashboardComponent,
  }
]
