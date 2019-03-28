import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city: string;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  save() {
  /**
   * Utilisay le service Alert Controller de Ionic
   * https://ionicframework.com/docs/api/alert
   * pour affichay la ville saysie dans une fônayrtre
   * "môwdale"
   */
  this.createMessage();
  }

  async createMessage(){
    const alert = await this.alertController.create({
header :this.city,
buttons: ['OKAY']
    })
  }
  // await car c'est une Promesse, mettre await c'est comme .then
await alert.present();
}
