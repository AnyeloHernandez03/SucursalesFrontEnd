import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasDropdownComponent } from './monedas-dropdown.component';

describe('MonedasDropdownComponent', () => {
  let component: MonedasDropdownComponent;
  let fixture: ComponentFixture<MonedasDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonedasDropdownComponent]
    });
    fixture = TestBed.createComponent(MonedasDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
