import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component'; /* Pour ajouter un menu */
import { PizzasRouteComponent } from './pizzas-route/pizzas-route.component'; /*Ajout du PizzasRouteComponent*/
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    FooterComponent,  /*Ajout du FooterComponent*/
    MenuComponent,    /*Ajout du MenuComponent*/
    PizzasRouteComponent  /*Ajout du PizzasRouteComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pizzas', component: PizzasRouteComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
