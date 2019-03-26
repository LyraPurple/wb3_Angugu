import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
}
