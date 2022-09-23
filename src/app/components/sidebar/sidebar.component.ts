import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    id:string;
    childrens?:RouteInfo[]
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '',id:"dashboard" },
    
    { path: '/customer-list', title: 'Customers',  icon:'person', class: '',id:"customerlista" ,childrens:[
      { path: '/customer-add', title: 'New Customer Add',id:"customeradd",  icon: 'personadd', class: ''},
      { path: '/customer-list', title: 'Customers List',id:"customerlist",  icon: 'content_paste', class: '' },
    
    ] },
    { path: '/investorcustomer-list', title: 'Investor Relations ',id:"investorcustomerlist",  icon:'currency_lira', class: '',childrens:[
      { path: '/investorcustomer-add', title: 'New Investor Add',id:"investorcustomeradd",  icon: 'personadd', class: '' },
      { path: '/investorcustomer-list', title: 'Investors List', id:"investorcustomerlist", icon: 'content_paste', class: '' }
    ] },

    { path: '/upgrade', title: 'Abroad Investor Relations ', id:"upgrade", icon:'request_quote', class: '',childrens:[
      { path: '/abroadinvestor-add', title: 'New Investor Add', id:"abroadinvestoradd",  icon: 'personadd', class: '' },
      { path: '/abroadinvestor-list', title: 'Investors List', id:"abroadinvestorlist", icon: 'content_paste', class: '' } 
    ] },
    { path: '/notifications', title: 'Curious Customers ', id:"notifications",  icon:'personsearch', class: '',childrens:[
      { path: '/curiouscustomer-add', title: 'New Curious Customers Add', id:"curiouscustomeradd",  icon: 'personadd', class: '' },
      { path: '/curiouscustomer-list', title: 'Curious Customers List',id:"curiouscustomerlist",  icon: 'content_paste', class: '' }
    ] },
    
    { path: '/table-list', title: 'Serious Customers', id:"tablelist" , icon:'group', class: '',childrens:[
      { path: '/seriouscustomer-add', title: 'New Serious Customers Add', id:"seriouscustomeradd", icon: 'personadd', class: '' },
      { path: '/seriouscustomer-list', title: 'Serious Customers List', id:"seriouscustomerlist",  icon: 'content_paste', class: '' }
    ] },
    { path: '/typography', title: 'Meetings',  id:"typography" ,icon:'groups', class: '',childrens:[
      { path: '/futuremeetingadd', title: 'Future Meetings Add', id:"futuremeetingadd" , icon: 'groupadd', class: '' },
      { path: '/futuremeetinglist', title: 'Future Meetings List', id:"futuremeetinglist" , icon: 'content_paste', class: '' },
      { path: '/finishedmeetinglist', title: 'Finished Meetings', id:"finishedmeetinglist",  icon: 'content_paste_off', class: '' }
    ] },
    { path: '/icons', title: 'Routine Services',  icon:'build', id:"icons", class: '',childrens:[
      { path: '/routineservice-add', title: 'New Routine Services Add', id:"routineserviceadd",  icon: 'add', class: '' },
      { path: '/routineservice-list', title: 'Routine Services List', id:"routineservicelist", icon: 'content_paste', class: '' },
    ]},
 
      

    
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
