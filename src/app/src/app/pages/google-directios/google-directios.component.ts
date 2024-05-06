import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-google-directios',
  templateUrl: './google-directios.component.html',
  styleUrls: ['./google-directios.component.scss'],
})
export class GoogleDirectiosComponent implements OnInit {
  destinos: google.maps.LatLng[] = [
    new google.maps.LatLng(-11.951835, -76.993131),
    new google.maps.LatLng(-11.957275, -76.997251),
    new google.maps.LatLng(-11.958535, -76.998511),
  ];

  directionsService = new google.maps.DirectionsService();
  directionsRenderers: google.maps.DirectionsRenderer[] = [];

  constructor() {}

  ngOnInit(): void {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: this.destinos[0], // Centrar el mapa en el primer destino
    });

    for (let i = 0; i < this.destinos.length - 1; i++) {
      const renderer = new google.maps.DirectionsRenderer();
      renderer.setMap(map);
      this.directionsRenderers.push(renderer);

      this.calcularYMostrarRuta(
        this.destinos[i],
        this.destinos[i + 1],
        renderer
      );
    }
  }

  calcularYMostrarRuta(
    origen: google.maps.LatLng,
    destino: google.maps.LatLng,
    renderer: google.maps.DirectionsRenderer
  ): void {
    const request = {
      origin: origen,
      destination: destino,
      travelMode: 'DRIVING',
    };

    this.directionsService.route(request, (result: any, status: any) => {
      if (status === 'OK') {
        renderer.setDirections(result);
      } else {
        console.error('Error al obtener las direcciones:', status);
      }
    });
  }
}
