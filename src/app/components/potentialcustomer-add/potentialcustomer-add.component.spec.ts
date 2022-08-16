import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriouscustomerAddComponent } from './potentialcustomer-add.component';

describe('SeriouscustomerAddComponent', () => {
  let component: SeriouscustomerAddComponent;
  let fixture: ComponentFixture<SeriouscustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriouscustomerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriouscustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
