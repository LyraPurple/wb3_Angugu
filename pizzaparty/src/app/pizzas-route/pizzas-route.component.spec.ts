import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasRouteComponent } from './pizzas-route.component';

describe('PizzasRouteComponent', () => {
  let component: PizzasRouteComponent;
  let fixture: ComponentFixture<PizzasRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
