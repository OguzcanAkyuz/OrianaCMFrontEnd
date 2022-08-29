import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childrens?:RouteInfo[]
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    
    { path: '/customer-list', title: 'Customers',  icon:'person', class: '',childrens:[
      { path: '/customer-add', title: 'New Customer Add',  icon: 'personadd', class: '',},
      { path: '/customer-list', title: 'Customers List',  icon: 'content_paste', class: '' }
    ] },
    { path: '/investorcustomer-list', title: 'Investor Relations ',  icon:'currency_lira', class: '',childrens:[
      { path: '/ınvestorcustomer-add', title: 'New Investor Add',  icon: 'personadd', class: '' },
      { path: '/ınvestorcustomer-list', title: 'Investors List',  icon: 'content_paste', class: '' }
    ] },

    { path: '/upgrade', title: 'Abroad Investor Relations ',  icon:'request_quote', class: '',childrens:[
      { path: '/abroadinvestor-add', title: 'New Investor Add',  icon: 'personadd', class: '' },
      { path: '/abroadinvestor-list', title: 'Investors List',  icon: 'content_paste', class: '' } 
    ] },
    { path: '/notifications', title: 'Curious Customers ',  icon:'personsearch', class: '',childrens:[
      { path: '/curiouscustomer-add', title: 'New Curious Customers Add',  icon: 'personadd', class: '' },
      { path: '/curiouscustomer-list', title: 'Curious Customers List',  icon: 'content_paste', class: '' }
    ] },
    
    { path: '/table-list', title: 'Serious Customers',  icon:'group', class: '',childrens:[
      { path: '/seriouscustomer-add', title: 'New Serious Customers Add',  icon: 'personadd', class: '' },
      { path: '/seriouscustomer-list', title: 'Serious Customers List',  icon: 'content_paste', class: '' }
    ] },
    { path: '/typography', title: 'Meetings',  icon:'groups', class: '',childrens:[
      { path: '/futuremeetingadd', title: 'Future Meetings Add',  icon: 'groupadd', class: '' },
      { path: '/futuremeetinglist', title: 'Future Meetings List',  icon: 'content_paste', class: '' },
      { path: '/finishedmeetinglist', title: 'Finished Meetings',  icon: 'content_paste_off', class: '' }
    ] },
    { path: '/icons', title: 'Routine Services',  icon:'build', class: '',childrens:[
      { path: '/routineservice-add', title: 'New Routine Services Add',  icon: 'add', class: '' },
      { path: '/routineservice-list', title: 'Routine Services List',  icon: 'content_paste', class: '' },
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
