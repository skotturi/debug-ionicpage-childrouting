import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartoneComponent } from './partone.component';

describe('PartoneComponent', () => {
  let component: PartoneComponent;
  let fixture: ComponentFixture<PartoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartoneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
