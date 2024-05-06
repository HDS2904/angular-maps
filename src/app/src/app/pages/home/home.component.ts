import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  destinos = [
    {
      lat: -12.0448773,
      lng: -77.040371,
    },
    {
      lat: -12.0448873,
      lng: -77.040271,
    },
    {
      lat: -12.0448673,
      lng: -77.040171,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onMapClick(op: any) {
    console.log('RESSSS');
  }
}
