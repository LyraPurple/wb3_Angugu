import { Component, OnInit } from '@angular/core'; /* OnInit voire class AppComponent */
import { Pizza } from './models/pizza';

// 💥const PIZZAS: Pizza[]💥 -> services/pizza.service.ts

import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ``,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { /* OnInit Debut */
  title = 'Mon site';
  selectedPizza: Pizza;
  pizzaList: Pizza[];

  constructor(private pizzaService: PizzaService) { } /* Définit dans /services/pizza.service */

  ngOnInit() {
    console.log('Je suis initialisé');
    /* var self = this;
    this.pizzaService.getPizzas().then(function (pizzas) {
      self.pizzaList = pizzas;
    }); */

    this.pizzaService.getPizzasSlowly().then(pizzas => this.pizzaList = pizzas);
  }

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
  }
}/* OnInit Debut */

/* misc/index.html
Teste et présentation de les promesses.
Integration des Promesses (attente d'un évènement plutôt qu'Observation :écouter ne permanance )

src/app/services/pizza.service.spec.ts
describe  'PizzaService'

src/app/services/pizza.service.ts */