import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
//component
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersComponent } from './pages/customers/customers.component';

//Route
import {Routers} from './routes/routes';
import { TopnavComponent } from './components/topnav/topnav.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { ThemeMenuComponent } from './components/theme-menu/theme-menu.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TableComponent } from './components/table/table.component';
import { LayoutComponent } from './components/layout/layout.component';

//
import { isDevMode } from '@angular/core';
import { provideStore, provideState, StoreModule } from '@ngrx/store';
import { ThemeReducer } from './redux/reducers/theme.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    TopnavComponent,
    StatusCardComponent,
    ThemeMenuComponent,
    BadgeComponent,
    SidebarComponent,
    DropdownComponent,
    TableComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routers),
    StoreModule.forRoot({theme : ThemeReducer}),
  ],
  providers: [
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
