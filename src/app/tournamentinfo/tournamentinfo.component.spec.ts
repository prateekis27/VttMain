import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentinfoComponent } from './tournamentinfo.component';

describe('TournamentinfoComponent', () => {
  let component: TournamentinfoComponent;
  let fixture: ComponentFixture<TournamentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
