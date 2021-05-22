import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L9Component } from './l9.component';

describe('L9Component', () => {
  let component: L9Component;
  let fixture: ComponentFixture<L9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
