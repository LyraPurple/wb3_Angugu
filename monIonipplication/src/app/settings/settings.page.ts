import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city: string;

  constructor(
    private alertController: AlertController,
    private storage: Storage
    ) { }

  ngOnInit() {
    // On récupére la ville dans la bdd si elle est présente
    this.storage.get('city').then(
      city => this.city = city
    );
  }

  async createMessage() {
    const alert = await this.alertController.create({
      header: this.city,
      buttons: [{
        text: 'OK',
        handler: () => {
          // On stocke la ville quand on clique sur OK
          this.storage.set('city', this.city);
          // this.storage.set('foo', {'bar': 'id', 'id': 'toto'});
        }
      }]
    });

    await alert.present();
  }

  save() {
    this.createMessage();

    /**
     * Utiliser le service Alert Controller de Ionic
     * pour afficher la ville saisie dans une fenêtre 
     * "modal"
     */
    console.log(this.city);
  }

}
