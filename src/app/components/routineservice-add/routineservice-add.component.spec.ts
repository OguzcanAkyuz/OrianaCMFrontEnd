import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineserviceAddComponent } from './routineservice-add.component';

describe('RoutineserviceAddComponent', () => {
  let component: RoutineserviceAddComponent;
  let fixture: ComponentFixture<RoutineserviceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineserviceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineserviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
