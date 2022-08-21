import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadinvestmentListComponent } from './abroadinvestment-list.component';

describe('AbroadinvestmentListComponent', () => {
  let component: AbroadinvestmentListComponent;
  let fixture: ComponentFixture<AbroadinvestmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadinvestmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadinvestmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
