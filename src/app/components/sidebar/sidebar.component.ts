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
    
    { path: '/user-profile', title: 'Customers',  icon:'person', class: '',childrens:[
      { path: '/user-profile', title: 'New Customer Add',  icon: 'personadd', class: '' },
      { path: '/user-profile', title: 'Customers List',  icon: 'content_paste', class: '' }
    ] },
    { path: '/maps', title: 'Investor Relations ',  icon:'handshake', class: '',childrens:[
      { path: '/maps', title: 'New Investor Add',  icon: 'personadd', class: '' },
      { path: '/maps', title: 'Investors List',  icon: 'content_paste', class: '' }
    ] },

    { path: '/upgrade', title: 'Abroad Investor Relations ',  icon:'airlines', class: '',childrens:[
      { path: '/upgrade', title: 'New Investor Add',  icon: 'personadd', class: '' },
      { path: '/upgrade', title: 'Investors List',  icon: 'content_paste', class: '' } 
    ] },
    { path: '/notifications', title: 'Curious Customers ',  icon:'personsearch', class: '',childrens:[
      { path: '/notifications', title: 'New Curious Customers Add',  icon: 'personadd', class: '' },
      { path: '/notifications', title: 'Curious Customers List',  icon: 'content_paste', class: '' }
    ] },
    
    { path: '/table-list', title: 'Serious Customers',  icon:'group', class: '',childrens:[
      { path: '/table-list', title: 'New Serious Customers Add',  icon: 'personadd', class: '' },
      { path: '/table-lit', title: 'Serious Customers List',  icon: 'content_paste', class: '' }
    ] },
    { path: '/typography', title: 'Meetings',  icon:'groups', class: '',childrens:[
      { path: '/typography', title: 'Future Meetings',  icon: 'content_paste', class: '' },
      { path: '/typography', title: 'Finished Meetings',  icon: 'content_paste', class: '' }
    ] },
    { path: '/icons', title: 'Routine Services',  icon:'build', class: '',childrens:[
      { path: '/icons', title: 'New Routine Services Add',  icon: 'add', class: '' },
      { path: '/icons', title: 'Routine Services List',  icon: 'content_paste', class: '' }
    ] },
    
];

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
