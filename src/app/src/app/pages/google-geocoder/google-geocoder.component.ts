import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-google-geocoder',
  templateUrl: './google-geocoder.component.html',
  styleUrls: ['./google-geocoder.component.scss'],
})
export class GoogleGeocoderComponent implements OnInit {
  geoLocation = {
    lat: 0,
    lng: 0,
  };

  constructor(private geocoder: MapGeocoder) {}

  ngOnInit(): void {}

  getGeolocation(direccion: string): void {
    this.geocoder.geocode({ address: direccion }).subscribe((results) => {
      const result: google.maps.GeocoderResult[] = results.results;
      if (result && result.length > 0) {
        const ubicacion = result[0].geometry.location;
        console.log('Coordenadas:', ubicacion.lat(), ubicacion.lng());
      } else {
        console.error(
          'No se encontraron resultados para la dirección:',
          direccion
        );
      }
    });
  }
}
