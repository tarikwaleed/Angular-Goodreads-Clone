import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWantToReadBooksComponent } from './user-want-to-read-books.component';

describe('UserWantToReadBooksComponent', () => {
  let component: UserWantToReadBooksComponent;
  let fixture: ComponentFixture<UserWantToReadBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWantToReadBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWantToReadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
