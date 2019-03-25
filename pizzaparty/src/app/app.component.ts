import { Component } from '@angular/core';

export class Pizza {
  id: number;
  name: string;
  price: number;
}

const PIZZAS: Pizza[] =[
  {id: 1, name: 'Reine', price: 12.33},
  {id: 2, name: '4 fromages', price: 13.99},
  {id: 3, name: 'Orientale', price: 11.99},
  {id: 4, name: 'Cannibale', price: 9.99},

];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:``,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon site';
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12.99
  };
  pizzaList = PIZZAS;
}