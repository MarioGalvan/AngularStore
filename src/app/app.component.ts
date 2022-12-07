import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg: boolean = true;
  onLoaded(img:string) {
    // console.log('Imagen cargada', img);
  }

  toogleImgShow() {
    this.showImg = !this.showImg;
  }
}
