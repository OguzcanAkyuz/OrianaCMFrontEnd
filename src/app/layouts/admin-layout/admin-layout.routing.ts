import { Routes } from '@angular/router';

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
import { LoginComponent } from 'app/components/login/login.component';
import { LoginGuard } from 'app/guards/login.guard';
import { RegisterComponent } from 'app/components/register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'customer-add',      component: CustomerAddComponent },
    { path: 'customer-list',   component: CustomerListComponent },

    { path: 'abroadinvestor-add',     component: AbroadinvestmentAddComponent },
    { path: 'abroadinvestor-list',     component: AbroadinvestmentListComponent },

    { path: 'ınvestorcustomer-add',     component: InvestorrelationAddComponent },
    { path: 'ınvestorcustomer-list',          component: InvestorrelationListComponent },

    { path: 'curiouscustomer-add',           component: CuriouscustomerAddComponent },
    { path: 'curiouscustomer-list',  component: CuriouscustomerListComponent },
    
    { path: 'futuremeetingadd',        component: ScheduledmeetingAddComponent },
    { path: 'futuremeetinglist',        component: ScheduledmeetingListComponent },
    { path: 'finishedmeetinglist',        component: FinishedmeetingListComponent },

    { path: 'seriouscustomer-add',        component: PotentialCustomerAddComponent },
    { path: 'seriouscustomer-list',        component: PotentialCustomerListComponent },

    { path: 'routineservice-add',        component: RoutineserviceAddComponent },
    { path: 'routineservice-list',        component: RoutineserviceListComponent ,canActivate:[LoginGuard]},
    { path: 'login',        component: LoginComponent },
    {path:'register', component:RegisterComponent}

];



