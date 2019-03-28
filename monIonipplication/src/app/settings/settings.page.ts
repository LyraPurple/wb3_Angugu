import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{
  city: string;
  constructor(
    private alertController: AlertController,
    private storage: Storage  ) { }

    ngOnInit(){
      this.storage.get('city').then(
        city => this.city =city
        );
    }
  save() {
  /**
   * Utilisay le service Alert Controller de Ionic
   * https://ionicframework.com/docs/api/alert
   * pour affichay la ville saysie dans une fônayrtre
   * "môwdale"
   */
  this.createMessage();
  console.log(this.city);
  }

  async createMessage(){
    const alert = await this.alertController.create({
      header:this.city,
      buttons: [{
        text: 'OKAY',
        handler: () => {
          // On stocke la ville quand on clique sur OKAY
          this.storage.set('city', this.city);
        }
      }]
    });
    // await car c'est une Promesse, mettre await c'est comme .then
  await alert.present();
  }
}
