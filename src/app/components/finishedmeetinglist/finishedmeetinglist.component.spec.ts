import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedmeetinglistedComponent } from './finishedmeetinglisted.component';

describe('FinishedmeetinglistedComponent', () => {
  let component: FinishedmeetinglistedComponent;
  let fixture: ComponentFixture<FinishedmeetinglistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedmeetinglistedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedmeetinglistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
