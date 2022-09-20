import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialcustomerUpdateComponent } from './potentialcustomer-update.component';

describe('PotentialcustomerUpdateComponent', () => {
  let component: PotentialcustomerUpdateComponent;
  let fixture: ComponentFixture<PotentialcustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialcustomerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialcustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
