import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-marker',
  templateUrl: './google-marker.component.html',
  styleUrls: ['./google-marker.component.scss'],
})
export class GoogleMarkerComponent implements OnInit {
  destinos = [
    {
      lat: -11.951835,
      lng: -76.993131,
    },
    {
      lat: -11.957275,
      lng: -76.997251,
    },
    {
      lat: -11.958535,
      lng: -76.998511,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onMapClick(op: any) {
    console.log('RESSSS');
  }
}
