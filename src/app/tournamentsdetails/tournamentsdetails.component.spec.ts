import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsdetailsComponent } from './tournamentsdetails.component';

describe('TournamentsdetailsComponent', () => {
  let component: TournamentsdetailsComponent;
  let fixture: ComponentFixture<TournamentsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
