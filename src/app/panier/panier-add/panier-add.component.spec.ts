import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierAddComponent } from './panier-add.component';

describe('PanierAddComponent', () => {
  let component: PanierAddComponent;
  let fixture: ComponentFixture<PanierAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
