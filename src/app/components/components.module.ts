import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CuriouscustomerAddComponent } from './curiouscustomer-add/curiouscustomer-add.component';
import { CuriouscustomerListComponent } from './curiouscustomer-list/curiouscustomer-list.component';
import { InvestorrelationAddComponent } from './investorrelation-add/investorrelation-add.component';
import { InvestorrelationListComponent } from './investorrelation-list/investorrelation-list.component';
import { PotentialCustomerAddComponent } from './potentialcustomer-add/potentialcustomer-add.component';
import { PotentialCustomerListComponent} from './potentialcustomer-list/potentialcustomer-list.component';
import { FuturemeetingAddComponent } from './futuremeeting-add/futuremeeting-add.component';
import { FuturemeetingListComponent } from './futuremeeting-list/futuremeeting-list.component';
import { RoutineserviceAddComponent } from './routineservice-add/routineservice-add.component';
import { RoutineserviceListComponent } from './routineservice-list/routineservice-list.component';
import { FinishedmeetingListComponent } from './finishedmeeting-list/finishedmeeting-list.component';
import { AbroadinvestmentAddComponent } from './abroadinvestment-add/abroadinvestment-add.component';
import { AbroadinvestmentListComponent } from './abroadinvestment-list/abroadinvestment-list.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule
  ],
  declarations: [
    
    NavbarComponent,
    SidebarComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CuriouscustomerAddComponent,
    CuriouscustomerListComponent,
    InvestorrelationAddComponent,
    InvestorrelationListComponent,
    PotentialCustomerListComponent,
    FuturemeetingAddComponent,
    FuturemeetingListComponent,
    RoutineserviceAddComponent,
    RoutineserviceListComponent,
    CuriouscustomerAddComponent,
    CuriouscustomerListComponent,
    CustomerAddComponent,
    CustomerListComponent,
    FuturemeetingAddComponent,
    FuturemeetingListComponent,
    InvestorrelationAddComponent,
    InvestorrelationListComponent,
    RoutineserviceAddComponent,
    RoutineserviceListComponent,
   PotentialCustomerAddComponent,
    FinishedmeetingListComponent,
    AbroadinvestmentAddComponent,
    AbroadinvestmentListComponent,
   
 
  ],
  exports: [
    
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
