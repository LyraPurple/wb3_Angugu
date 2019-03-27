import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  quantity: number = 1;

  increasePrice(event) {
    this.quantity += event;
  }

  decreasePrice(event) {
    this.quantity -= event;

    if (this.quantity < 1) {
      this.pizza = null;
      this.quantity = 1;
    }
  }
}
