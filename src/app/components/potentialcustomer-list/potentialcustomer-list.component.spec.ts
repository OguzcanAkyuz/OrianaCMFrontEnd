import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriouscustomerListComponent } from './potentialcustomer-list.component';

describe('SeriouscustomerListComponent', () => {
  let component: SeriouscustomerListComponent;
  let fixture: ComponentFixture<SeriouscustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriouscustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriouscustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
