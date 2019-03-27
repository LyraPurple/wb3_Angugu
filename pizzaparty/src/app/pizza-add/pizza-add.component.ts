import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent {
  // pizza: Pizza;

  pizza: Pizza = new Pizza();
  
  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ) { }

  create() {
    console.log(this.pizza);
    this.pizzaService.createPizza(this.pizza).then(
      () => this.router.navigate(['/pizzas'])
    );
  }
}