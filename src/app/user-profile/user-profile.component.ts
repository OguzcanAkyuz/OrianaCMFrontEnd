import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  ifCustomerAddOpen=true;
  constructor() { }

  ngOnInit() {
  }
  ifClickCustomerAdd(){
    this.ifCustomerAddOpen=true;
  } 
  ifClickCustomerList(){
    this.ifCustomerAddOpen=false;
  }
}
