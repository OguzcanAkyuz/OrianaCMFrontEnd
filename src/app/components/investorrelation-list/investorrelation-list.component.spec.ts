import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorrelationListComponent } from './investorrelation-list.component';

describe('InvestorrelationListComponent', () => {
  let component: InvestorrelationListComponent;
  let fixture: ComponentFixture<InvestorrelationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorrelationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorrelationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
