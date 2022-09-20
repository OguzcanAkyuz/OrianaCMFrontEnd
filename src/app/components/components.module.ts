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
import {  ScheduledmeetingAddComponent } from './scheduledMeeting-add/scheduledmeeting-add.component';
import { ScheduledmeetingListComponent } from './scheduledmeeting-list/scheduledmeeting-list.component';
import { RoutineserviceAddComponent } from './routineservice-add/routineservice-add.component';
import { RoutineserviceListComponent } from './routineservice-list/routineservice-list.component';
import { FinishedmeetingListComponent } from './finishedmeeting-list/finishedmeeting-list.component';
import { AbroadinvestmentAddComponent } from './abroadinvestment-add/abroadinvestment-add.component';
import { AbroadinvestmentListComponent } from './abroadinvestment-list/abroadinvestment-list.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/interceptor/auth.interceptor';
import { AppComponent } from 'app/app.component';
import { routes } from 'app/app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { AbdroadinvestmentPipe } from './pipes/abdroadinvestment.pipe';
import { CuriouscustomerPipe } from './pipes/curiouscustomer.pipe';
import { FinishedmeetingPipe } from './pipes/finishedmeeting.pipe';
import { PotentialcustomerPipe } from './pipes/potentialcustomer.pipe';
import { RoutineservicePipe } from './pipes/routineservice.pipe';
import { ScheduledmeetingPipe } from './pipes/scheduledmeeting.pipe';
import { InvestmentrelationPipe } from './pipes/investmentrelation.pipe';
import { AbroadinvestmentUpdateComponent } from './update-components/abroadinvestment-update/abroadinvestment-update.component';
import { CuriouscustomerUpdateComponent } from './update-components/curiouscustomer-update/curiouscustomer-update.component';
import { CustomerUpdateComponent } from './update-components/customer-update/customer-update.component';
import { FinishedmeetingUpdateComponent } from './update-components/finishedmeeting-update/finishedmeeting-update.component';
import { InvestmentrelationUpdateComponent } from './update-components/investmentrelation-update/investmentrelation-update.component';
import { PotentialcustomerUpdateComponent } from './update-components/potentialcustomer-update/potentialcustomer-update.component';
import { RoutineserviceUpdateComponent } from './update-components/routineservice-update/routineservice-update.component';
import { ScheduledmeetingUpdateComponent } from './update-components/scheduledmeeting-update/scheduledmeeting-update.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"}),
      
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
    ScheduledmeetingAddComponent,
    RoutineserviceAddComponent,
    RoutineserviceListComponent,
    CuriouscustomerAddComponent,
    CuriouscustomerListComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ScheduledmeetingListComponent,
    InvestorrelationAddComponent,
    InvestorrelationListComponent,
    RoutineserviceAddComponent,
    RoutineserviceListComponent,
   PotentialCustomerAddComponent,
    FinishedmeetingListComponent,
    AbroadinvestmentAddComponent,
    AbroadinvestmentListComponent,
    FilterPipe,
    AbdroadinvestmentPipe,
    CuriouscustomerPipe,
    FinishedmeetingPipe,
    PotentialcustomerPipe,
    RoutineservicePipe,
    ScheduledmeetingPipe,
    InvestmentrelationPipe,
    AbroadinvestmentUpdateComponent,
    CuriouscustomerUpdateComponent,
    CustomerUpdateComponent,
    FinishedmeetingUpdateComponent,
    InvestmentrelationUpdateComponent,
    PotentialcustomerUpdateComponent,
    RoutineserviceUpdateComponent,
    ScheduledmeetingUpdateComponent,
  
   
 
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  
  exports: [
    
    NavbarComponent,
    SidebarComponent,
  ],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
