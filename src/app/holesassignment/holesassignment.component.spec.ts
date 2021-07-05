import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolesassignmentComponent } from './holesassignment.component';

describe('HolesassignmentComponent', () => {
  let component: HolesassignmentComponent;
  let fixture: ComponentFixture<HolesassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolesassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolesassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
