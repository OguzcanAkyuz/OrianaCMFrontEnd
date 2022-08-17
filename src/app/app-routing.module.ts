import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbroadinvestmentAddComponent } from './components/abroadinvestment-add/abroadinvestment-add.component';


const routes: Routes = [
 {path:"abroadinvestmentrelation/add", component:AbroadinvestmentAddComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
