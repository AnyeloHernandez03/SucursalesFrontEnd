import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSucursalesComponent } from './index-sucursales.component';

describe('IndexSucursalesComponent', () => {
  let component: IndexSucursalesComponent;
  let fixture: ComponentFixture<IndexSucursalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSucursalesComponent]
    });
    fixture = TestBed.createComponent(IndexSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
