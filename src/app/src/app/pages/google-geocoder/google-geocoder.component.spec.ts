import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleGeocoderComponent } from './google-geocoder.component';

describe('GoogleGeocoderComponent', () => {
  let component: GoogleGeocoderComponent;
  let fixture: ComponentFixture<GoogleGeocoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleGeocoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleGeocoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
