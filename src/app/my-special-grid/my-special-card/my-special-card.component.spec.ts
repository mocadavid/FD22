import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpecialCardComponent } from './my-special-card.component';

describe('MySpecialCardComponent', () => {
  let component: MySpecialCardComponent;
  let fixture: ComponentFixture<MySpecialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpecialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpecialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
