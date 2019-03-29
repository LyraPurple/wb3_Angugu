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
    temperature: null
  }

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
        console.log(response);
        this.meteo.image = response.current_condition.icon_big;
        this.meteo.temperature = response.current_condition.tmp;

        /**
         * On veut afficher dans le template la température pour les 4
         * prochains jours. On utilisera une "ion-list".
         */
      }
    );
  }

  navToAbout() {
    this.router.navigate(['/about']);
  }
}
