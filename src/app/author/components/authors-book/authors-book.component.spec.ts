import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsBookComponent } from './authors-book.component';

describe('AuthorsBookComponent', () => {
  let component: AuthorsBookComponent;
  let fixture: ComponentFixture<AuthorsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
