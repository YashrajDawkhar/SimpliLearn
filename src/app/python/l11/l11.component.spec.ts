import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L11Component } from './l11.component';

describe('L11Component', () => {
  let component: L11Component;
  let fixture: ComponentFixture<L11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
