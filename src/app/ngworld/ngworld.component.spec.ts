import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgworldComponent } from './ngworld.component';

describe('NgworldComponent', () => {
  let component: NgworldComponent;
  let fixture: ComponentFixture<NgworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
