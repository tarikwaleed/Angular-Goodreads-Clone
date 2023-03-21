/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookRatingComponent } from './book-rating.component';

describe('BookRatingComponent', () => {
  let component: BookRatingComponent;
  let fixture: ComponentFixture<BookRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
