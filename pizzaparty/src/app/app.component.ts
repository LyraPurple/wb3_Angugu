import { Component } from '@angular/core';
import { Pizza } from './models/pizza';

/* Déplacé dans pizza.ts
export class Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
}
Fin Déplacé dans pizza.ts */

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, image: '01.jpg' },
  { id: 2, name: '4 fromages', price: 13.99, image: '02.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, image: '03.jpg' },
  { id: 4, name: 'Cannibale', price: 9.99, image: '04.jpg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ``,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mon site';
  selectedPizza: Pizza;
  pizzaList = PIZZAS;

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
  }
}
