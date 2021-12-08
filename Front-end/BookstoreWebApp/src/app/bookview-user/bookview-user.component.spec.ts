import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewUserComponent } from './bookview-user.component';

describe('BookviewUserComponent', () => {
  let component: BookviewUserComponent;
  let fixture: ComponentFixture<BookviewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookviewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookviewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
