import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMarkerComponent } from './google-marker.component';

describe('GoogleMarkerComponent', () => {
  let component: GoogleMarkerComponent;
  let fixture: ComponentFixture<GoogleMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
