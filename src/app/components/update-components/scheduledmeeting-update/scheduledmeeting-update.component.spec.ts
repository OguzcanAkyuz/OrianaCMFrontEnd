import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledmeetingUpdateComponent } from './scheduledmeeting-update.component';

describe('ScheduledmeetingUpdateComponent', () => {
  let component: ScheduledmeetingUpdateComponent;
  let fixture: ComponentFixture<ScheduledmeetingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledmeetingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledmeetingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
