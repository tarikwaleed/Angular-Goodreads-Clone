import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthErrorComponent } from './not-auth-error.component';

describe('NotAuthErrorComponent', () => {
  let component: NotAuthErrorComponent;
  let fixture: ComponentFixture<NotAuthErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
