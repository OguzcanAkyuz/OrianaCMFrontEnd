import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadinvestmentAddComponent } from './abroadinvestment-add.component';

describe('AbroadinvestmentAddComponent', () => {
  let component: AbroadinvestmentAddComponent;
  let fixture: ComponentFixture<AbroadinvestmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadinvestmentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadinvestmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
