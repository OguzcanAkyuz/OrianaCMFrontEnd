import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { CuriousCustomerService } from 'app/services/curiouscustomer.service';

@Component({
  selector: 'app-curiouscustomer-list',
  templateUrl: './curiouscustomer-list.component.html',
  styleUrls: ['./curiouscustomer-list.component.scss']
})
export class CuriouscustomerListComponent implements OnInit {
curiousCustomers:CuriousCustomer[]=[];
dataLoaded=false;

  constructor(private curiousCustomerService:CuriousCustomerService,
  private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCuriousCustomers();

  }
getCuriousCustomers(){
  this.curiousCustomerService.getCuriousCustomers().subscribe(response=>{
    this.curiousCustomers = response.data
    this.dataLoaded = true;
})
}
}
