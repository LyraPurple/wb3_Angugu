import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: string;
  meteo = {
    image: null,
    temperature: null,
    error: false /* Récupération de l'erreur */
  }
  days: object[] = [];

  constructor(
    private router: Router,
    private storage: Storage,
    private http: HttpClient
  ) { }

  /**
   * Quand on retourne sur la page home, on recharge
   * la ville à partir du storage
   */
  ionViewWillEnter() {
    this.storage.get('city').then(c => {
      this.city = c;
      return this.http.get('https://www.prevision-meteo.ch/services/json/' + this.city).toPromise();
    }).then(
      response => {
      /*Plus bas, après les testes
        this.meteo.image = response['current_condition']['icon_big'];
        this.meteo.temperature = response['current_condition']['tmp']; */
        this.meteo = {
          image: null,
          temperature: null,
          error: false
        };        
        this.days = [];

        // Si pas de ville choisie, on ne fait rien
        if (this.city === null || this.city.length === 0) {
          return;
        }
        // Si la ville n'est pas trouvée par l'API
        if (response.hasOwnProperty('errors')) {
          this.meteo.error = true;
          return;
        }

        // Si la ville est trouvée par l'API
        this.meteo.image = response['current_condition']['icon_big'];
        this.meteo.temperature = response['current_condition']['tmp'];
        this.city = response['city_info']['name'];

        /**
         * On affiche la température pour les 4
         * prochains jours.
         */
        for (let i of [1, 2, 3, 4]) {
          this.days.push(response['fcst_day_' + i]);
        }
      }
    );
  }

  navToAbout() {
    this.router.navigate(['/about']);
  }
}
