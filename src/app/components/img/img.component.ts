import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() imgLoadEvent = new EventEmitter<string>();

  defaultImage: string =
    'https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder.png';

  ngOnInit(): void {
    console.log(this.img);
  }

  imgError() {
    this.img = this.defaultImage;
  }

  imgLoaded() {
    this.imgLoadEvent.emit(this.img);
  }
}
