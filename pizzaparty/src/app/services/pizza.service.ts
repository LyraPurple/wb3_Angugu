import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère un tableau de pizzas
   */
  getPizzas(): Promise<Pizza[]> {
    return this.http.get('api/pizzas').toPromise().then(
      response => response as Pizza[]
    );
  }

  /**
   * Récupérer une pizza par son id
   */
  getPizza(id: number): Promise<Pizza> {
    return this.http.get('api/pizzas/' + id).toPromise().then(
      response => response as Pizza
    );

    /* return this.getPizzas().then(pizzas => {
      return pizzas.find(pizza => {
        return pizza.id === id;
      });
    }); */
  }

  /**
   * Récupérer le nombre de pizzas.
   */
  countPizza(): Promise<number> {
    return this.http.get('api/total').toPromise().then(
      response => response as number
    );
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
