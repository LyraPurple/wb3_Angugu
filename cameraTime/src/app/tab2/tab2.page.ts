import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos: string[] = [];

  constructor(private camera: Camera) { }

  takePicture() {
    this.camera.getPicture({
      // On stocke l'image sous forme de string et non de fichier
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(imageData => {
      this.photos.push('data:image/jpeg;base64,'+imageData);
    });
  }
}
