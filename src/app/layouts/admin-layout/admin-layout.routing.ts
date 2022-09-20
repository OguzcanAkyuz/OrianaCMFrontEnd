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
import { LoginComponent } from 'app/login/login.component';
import { LoginGuard } from 'app/guards/login.guard';
import { RegisterComponent } from 'app/components/register/register.component';
import { CustomerUpdateComponent } from 'app/components/update-components/customer-update/customer-update.component';
import { AbroadinvestmentUpdateComponent } from 'app/components/update-components/abroadinvestment-update/abroadinvestment-update.component';
import { InvestmentrelationUpdateComponent } from 'app/components/update-components/investmentrelation-update/investmentrelation-update.component';
import { CuriouscustomerUpdateComponent } from 'app/components/update-components/curiouscustomer-update/curiouscustomer-update.component';
import { ScheduledmeetingUpdateComponent } from 'app/components/update-components/scheduledmeeting-update/scheduledmeeting-update.component';
import { FinishedmeetingUpdateComponent } from 'app/components/update-components/finishedmeeting-update/finishedmeeting-update.component';
import { PotentialcustomerUpdateComponent } from 'app/components/update-components/potentialcustomer-update/potentialcustomer-update.component';
import { RoutineserviceUpdateComponent } from 'app/components/update-components/routineservice-update/routineservice-update.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[LoginGuard]},

    { path: 'customer-add',      component: CustomerAddComponent,canActivate:[LoginGuard] },
    { path: 'customer-list',   component: CustomerListComponent,canActivate:[LoginGuard] },
    { path: 'customer-update/:id',   component: CustomerUpdateComponent,canActivate:[LoginGuard] },

    { path: 'abroadinvestor-add',     component: AbroadinvestmentAddComponent,canActivate:[LoginGuard] },
    { path: 'abroadinvestor-list',     component: AbroadinvestmentListComponent,canActivate:[LoginGuard] },
    { path: 'abroadinvestment-update/:id',   component: AbroadinvestmentUpdateComponent,canActivate:[LoginGuard] },

    { path: 'ınvestorcustomer-add',     component: InvestorrelationAddComponent,canActivate:[LoginGuard] },
    { path: 'ınvestorcustomer-list',          component: InvestorrelationListComponent,canActivate:[LoginGuard] },
    { path: 'investmentrelation-update/:id',   component: InvestmentrelationUpdateComponent,canActivate:[LoginGuard] },

    { path: 'curiouscustomer-add',           component: CuriouscustomerAddComponent,canActivate:[LoginGuard] },
    { path: 'curiouscustomer-list',  component: CuriouscustomerListComponent,canActivate:[LoginGuard] },
     { path: 'curiouscustomer-update/:id',   component: CuriouscustomerUpdateComponent,canActivate:[LoginGuard] },

    { path: 'futuremeetingadd',        component: ScheduledmeetingAddComponent,canActivate:[LoginGuard] },
    { path: 'futuremeetinglist',        component: ScheduledmeetingListComponent ,canActivate:[LoginGuard]},
    { path: 'finishedmeetinglist',        component: FinishedmeetingListComponent,canActivate:[LoginGuard] },
    { path: 'scheduledmeeting-update/:id',   component:ScheduledmeetingUpdateComponent ,canActivate:[LoginGuard] },
    { path: 'finishedmeeting-update/:id',   component: FinishedmeetingUpdateComponent,canActivate:[LoginGuard] },

    { path: 'seriouscustomer-add',        component: PotentialCustomerAddComponent,canActivate:[LoginGuard] },
    { path: 'seriouscustomer-list',        component: PotentialCustomerListComponent,canActivate:[LoginGuard] },
    { path: 'potentialcustomer-update/:id',   component: PotentialcustomerUpdateComponent,canActivate:[LoginGuard] },

    { path: 'routineservice-add',        component: RoutineserviceAddComponent,canActivate:[LoginGuard] },
    { path: 'routineservice-list',        component: RoutineserviceListComponent ,canActivate:[LoginGuard]},
     { path: 'routineservice-update/:id',   component: RoutineserviceUpdateComponent,canActivate:[LoginGuard] },
  

];



