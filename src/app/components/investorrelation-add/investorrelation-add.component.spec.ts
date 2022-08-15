import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorrelationAddComponent } from './investorrelation-add.component';

describe('InvestorrelationAddComponent', () => {
  let component: InvestorrelationAddComponent;
  let fixture: ComponentFixture<InvestorrelationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorrelationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorrelationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
