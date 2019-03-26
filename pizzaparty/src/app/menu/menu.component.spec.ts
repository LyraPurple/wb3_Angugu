import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* src/app/app.component.html
<app-menu></app-menu>

src/app/app.module.ts
import { MenuComponent } from './menu/menu.component';
@NgModule MenuComponent

src/app/menu/menu.component.html
<nav></nav>

src/app/menu/menu.component.scss


src/app/menu/menu.component.spec.ts
import { MenuComponent } from './menu.component';
describe'MenuComponent'

src/app/menu/menu.component.ts
@Component selector: 'app-menu'
export class MenuComponent  */