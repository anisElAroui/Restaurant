import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastItemComponent } from './breakfast-item.component';

describe('BreakfastItemComponent', () => {
  let component: BreakfastItemComponent;
  let fixture: ComponentFixture<BreakfastItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
