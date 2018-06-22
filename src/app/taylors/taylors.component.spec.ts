/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaylorsComponent } from './taylors.component';

describe('TaylorsComponent', () => {
  let component: TaylorsComponent;
  let fixture: ComponentFixture<TaylorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaylorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaylorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
