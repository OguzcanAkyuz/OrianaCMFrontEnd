import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriouscustomerListComponent } from './curiouscustomer-list.component';

describe('CuriouscustomerListComponent', () => {
  let component: CuriouscustomerListComponent;
  let fixture: ComponentFixture<CuriouscustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriouscustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriouscustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
