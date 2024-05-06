import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/app/pages/home/home.component';
import { GoogleDirectiosComponent } from './src/app/pages/google-directios/google-directios.component';
import { GoogleMarkerComponent } from './src/app/pages/google-marker/google-marker.component';
import { GoogleGeocoderComponent } from './src/app/pages/google-geocoder/google-geocoder.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GoogleDirectiosComponent, GoogleMarkerComponent, GoogleGeocoderComponent],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
