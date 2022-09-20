import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentrelationUpdateComponent } from './investmentrelation-update.component';

describe('InvestmentrelationUpdateComponent', () => {
  let component: InvestmentrelationUpdateComponent;
  let fixture: ComponentFixture<InvestmentrelationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentrelationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentrelationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
