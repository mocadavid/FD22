import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpecialGridComponent } from './my-special-grid.component';

describe('MySpecialGridComponent', () => {
  let component: MySpecialGridComponent;
  let fixture: ComponentFixture<MySpecialGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpecialGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpecialGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
