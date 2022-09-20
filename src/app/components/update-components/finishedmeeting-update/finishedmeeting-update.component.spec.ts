import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedmeetingUpdateComponent } from './finishedmeeting-update.component';

describe('FinishedmeetingUpdateComponent', () => {
  let component: FinishedmeetingUpdateComponent;
  let fixture: ComponentFixture<FinishedmeetingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedmeetingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedmeetingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
