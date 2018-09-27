import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Devextreme1Component } from './devextreme1.component';

describe('Devextreme1Component', () => {
  let component: Devextreme1Component;
  let fixture: ComponentFixture<Devextreme1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Devextreme1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Devextreme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
