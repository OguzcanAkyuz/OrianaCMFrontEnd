import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineserviceUpdateComponent } from './routineservice-update.component';

describe('RoutineserviceUpdateComponent', () => {
  let component: RoutineserviceUpdateComponent;
  let fixture: ComponentFixture<RoutineserviceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineserviceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineserviceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
