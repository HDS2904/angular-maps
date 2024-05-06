import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleDirectiosComponent } from './src/app/pages/google-directios/google-directios.component';
import { GoogleGeocoderComponent } from './src/app/pages/google-geocoder/google-geocoder.component';
import { GoogleMarkerComponent } from './src/app/pages/google-marker/google-marker.component';
import { HomeComponent } from './src/app/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'marker', component: GoogleMarkerComponent },
  { path: 'direction', component: GoogleDirectiosComponent },
  { path: 'geolocation', component: GoogleGeocoderComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
