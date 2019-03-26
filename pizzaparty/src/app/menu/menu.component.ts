import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() logo: string;
  isCollapsed: boolean = false;

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
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
export class MenuComponent 
 */