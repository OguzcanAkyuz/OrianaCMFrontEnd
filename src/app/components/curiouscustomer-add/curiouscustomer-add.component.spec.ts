import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriouscustomerAddComponent } from './curiouscustomer-add.component';

describe('CuriouscustomerAddComponent', () => {
  let component: CuriouscustomerAddComponent;
  let fixture: ComponentFixture<CuriouscustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriouscustomerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriouscustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
