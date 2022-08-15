import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineserviceListComponent } from './routineservice-list.component';

describe('RoutineserviceListComponent', () => {
  let component: RoutineserviceListComponent;
  let fixture: ComponentFixture<RoutineserviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineserviceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
