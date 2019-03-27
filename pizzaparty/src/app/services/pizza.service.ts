import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, image: '01.jpg' },
  { id: 2, name: '4 fromages', price: 13.99, image: '02.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, image: '03.jpg' },
  { id: 4, name: 'Cannibale', price: 9.99, image: '04.jpg' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  /**
   * Récupère un tableau de pizzas
   */
  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  /**
   * Récupérer une pizza par son id
   */
  getPizza(id: number): Promise<Pizza> {
    return this.getPizzas().then(
      pizzas => pizzas.find(pizza => pizza.id === id)
    );

    /* return this.getPizzas().then(pizzas => {
      return pizzas.find(pizza => {
        return pizza.id === id;
      });
    }); */
  }
  
  /**
   * Permet de simuler une mauvaise connexion
   */
  getPizzasSlowly(): Promise<Pizza[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPizzas()), 2000);
    });
  }
}
