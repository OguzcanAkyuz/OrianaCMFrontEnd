import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriouscustomerUpdateComponent } from './curiouscustomer-update.component';

describe('CuriouscustomerUpdateComponent', () => {
  let component: CuriouscustomerUpdateComponent;
  let fixture: ComponentFixture<CuriouscustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriouscustomerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriouscustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
