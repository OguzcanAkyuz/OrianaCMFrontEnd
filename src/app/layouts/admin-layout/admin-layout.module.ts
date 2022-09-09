import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { routes } from 'app/app-routing.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    

    })
    

  ],
  declarations: [DashboardComponent ],
})
export class AdminLayoutModule {}
