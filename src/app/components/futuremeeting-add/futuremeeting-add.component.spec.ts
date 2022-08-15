import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturemeetingAddComponent } from './futuremeeting-add.component';

describe('FuturemeetingAddComponent', () => {
  let component: FuturemeetingAddComponent;
  let fixture: ComponentFixture<FuturemeetingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturemeetingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturemeetingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
