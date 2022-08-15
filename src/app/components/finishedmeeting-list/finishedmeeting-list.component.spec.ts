import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedmeetingListComponent } from './finishedmeeting-list.component';

describe('FinishedmeetingListComponent', () => {
  let component: FinishedmeetingListComponent;
  let fixture: ComponentFixture<FinishedmeetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedmeetingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedmeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
