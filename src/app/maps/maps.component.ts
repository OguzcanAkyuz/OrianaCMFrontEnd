import { Component, OnInit } from '@angular/core';


interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   
  

    // To add the marker to the map, call setMap();
   
  }

}
