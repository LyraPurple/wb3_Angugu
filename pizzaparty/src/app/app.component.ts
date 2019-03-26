import { Component, OnInit } from '@angular/core'; 
/* Les import de {Pizza} et {PizzaService } est déplacé à:
src/app/pizzas-route/pizzas-route.component.ts */

// 💥const PIZZAS: Pizza[]💥 -> services/pizza.service.ts

import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ``,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'Mon site';

  // Déplacement dans src/app/pizzas-route/pizzas-route.component.ts de :
/*   
export class PizzasRouteComponent implements OnInit 
@Component
constructor(private pizzaService: PizzaService)
ngOnInit 
*/
}