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
