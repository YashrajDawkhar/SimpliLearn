import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L7Component } from './l7.component';

describe('L7Component', () => {
  let component: L7Component;
  let fixture: ComponentFixture<L7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
