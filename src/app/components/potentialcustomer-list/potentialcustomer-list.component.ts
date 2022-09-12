import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { PotentialcustomerService } from 'app/services/potentialcustomer.service';

@Component({
  selector: 'app-potentialcustomer-list',
  templateUrl: './potentialcustomer-list.component.html',
  styleUrls: ['./potentialcustomer-list.component.scss']
})
export class PotentialCustomerListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:PotentialCustomer[];
  potentialCustomers:PotentialCustomer[]=[];
dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute, private potentialCustomersService:PotentialcustomerService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByPotentialCustomer(params["Id"])
      }else{
        this.getPotentialCustomers()
      }
    })
  }
  getPotentialCustomers() {
    this.potentialCustomersService.getPotentialCustomers().subscribe(response=>{
      this.potentialCustomers = response.data
      this.dataLoaded = true;
    })   
  }
  getByPotentialCustomer(Id:string) {
    this.potentialCustomersService.getByPotentialCustomer(Id).subscribe(response=>{
      this.potentialCustomers = response.data
      this.dataLoaded = true;
    })   
  }
}
