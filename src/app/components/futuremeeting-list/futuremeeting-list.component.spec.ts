import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturemeetingListComponent } from './futuremeeting-list.component';

describe('FuturemeetingListComponent', () => {
  let component: FuturemeetingListComponent;
  let fixture: ComponentFixture<FuturemeetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturemeetingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturemeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
