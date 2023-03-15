import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentlyReadingBooksComponent } from './user-currently-reading-books.component';

describe('UserCurrentlyReadingBooksComponent', () => {
  let component: UserCurrentlyReadingBooksComponent;
  let fixture: ComponentFixture<UserCurrentlyReadingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCurrentlyReadingBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCurrentlyReadingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
