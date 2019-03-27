import { Component } from '@angular/core';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent {
  total: number = 0;

  onIncrement(event) {
    this.total += event;
  }

  onDecrement(event) {
    this.total -= event;
  }
}
