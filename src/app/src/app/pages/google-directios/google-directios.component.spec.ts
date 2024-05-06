import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDirectiosComponent } from './google-directios.component';

describe('GoogleDirectiosComponent', () => {
  let component: GoogleDirectiosComponent;
  let fixture: ComponentFixture<GoogleDirectiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleDirectiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDirectiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
