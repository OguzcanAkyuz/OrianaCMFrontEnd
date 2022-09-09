
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from 'app/components/customer-list/customer-list.component';
import { CustomerAddComponent } from 'app/components/customer-add/customer-add.component';
import { AbroadinvestmentAddComponent } from 'app/components/abroadinvestment-add/abroadinvestment-add.component';
import { AbroadinvestmentListComponent } from 'app/components/abroadinvestment-list/abroadinvestment-list.component';
import { InvestorrelationAddComponent } from 'app/components/investorrelation-add/investorrelation-add.component';
import { InvestorrelationListComponent } from 'app/components/investorrelation-list/investorrelation-list.component';
import { CuriouscustomerAddComponent } from 'app/components/curiouscustomer-add/curiouscustomer-add.component';
import { CuriouscustomerListComponent } from 'app/components/curiouscustomer-list/curiouscustomer-list.component';
import { PotentialCustomerAddComponent } from 'app/components/potentialcustomer-add/potentialcustomer-add.component';
import {  ScheduledmeetingListComponent } from 'app/components/scheduledmeeting-list/scheduledmeeting-list.component';
import { FinishedmeetingListComponent } from 'app/components/finishedmeeting-list/finishedmeeting-list.component';
import { RoutineserviceAddComponent } from 'app/components/routineservice-add/routineservice-add.component';
import { RoutineserviceListComponent } from 'app/components/routineservice-list/routineservice-list.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ScheduledmeetingAddComponent } from 'app/components/scheduledMeeting-add/scheduledmeeting-add.component';
import { PotentialCustomerListComponent } from 'app/components/potentialcustomer-list/potentialcustomer-list.component';

import { LoginGuard } from 'app/guards/login.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';




export const routes: Routes = [
  { path: 'login',        component: LoginComponent,},
  
  { path: 'admin-layout',      component: AdminLayoutModule ,canActivate:[LoginGuard],children:[
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[LoginGuard]},
    { path: 'customer-add',      component: CustomerAddComponent,canActivate:[LoginGuard] },
  { path: 'customer-list',   component: CustomerListComponent,canActivate:[LoginGuard] },

  { path: 'abroadinvestor-add',     component: AbroadinvestmentAddComponent,canActivate:[LoginGuard] },
  { path: 'abroadinvestor-list',     component: AbroadinvestmentListComponent,canActivate:[LoginGuard] },

  { path: 'ınvestorcustomer-add',     component: InvestorrelationAddComponent,canActivate:[LoginGuard] },
  { path: 'ınvestorcustomer-list',          component: InvestorrelationListComponent,canActivate:[LoginGuard] },

  { path: 'curiouscustomer-add',           component: CuriouscustomerAddComponent,canActivate:[LoginGuard] },
  { path: 'curiouscustomer-list',  component: CuriouscustomerListComponent,canActivate:[LoginGuard] },
  
  { path: 'futuremeetingadd',        component: ScheduledmeetingAddComponent,canActivate:[LoginGuard] },
  { path: 'futuremeetinglist',        component: ScheduledmeetingListComponent ,canActivate:[LoginGuard]},
  { path: 'finishedmeetinglist',        component: FinishedmeetingListComponent,canActivate:[LoginGuard] },

  { path: 'seriouscustomer-add',        component: PotentialCustomerAddComponent,canActivate:[LoginGuard] },
  { path: 'seriouscustomer-list',        component: PotentialCustomerListComponent,canActivate:[LoginGuard] },

  { path: 'routineservice-add',        component: RoutineserviceAddComponent,canActivate:[LoginGuard] },
  { path: 'routineservice-list',        component: RoutineserviceListComponent ,canActivate:[LoginGuard]} ]}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
