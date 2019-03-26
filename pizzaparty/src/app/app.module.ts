import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
/* Ajout du dossier footer, 
avec tout les éléments 
  footer.component. 
                    html, 
                    scss, 
                    spec.ts, 
                    .ts */
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    FooterComponent  /*Ajout du FooterComponent, déclaration de celui-ci */
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
