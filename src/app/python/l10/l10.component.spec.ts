import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L10Component } from './l10.component';

describe('L10Component', () => {
  let component: L10Component;
  let fixture: ComponentFixture<L10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
