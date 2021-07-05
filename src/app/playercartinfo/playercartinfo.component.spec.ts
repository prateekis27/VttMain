import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercartinfoComponent } from './playercartinfo.component';

describe('PlayercartinfoComponent', () => {
  let component: PlayercartinfoComponent;
  let fixture: ComponentFixture<PlayercartinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercartinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayercartinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
