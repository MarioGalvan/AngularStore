import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnChanges, AfterViewInit, OnInit, OnDestroy
{
  @Input() img: string = '';
  @Output() imgLoadEvent = new EventEmitter<string>();
  counter: number = 0;
  showImg: boolean = false;
  // counterFunction: number | undefined;

  defaultImage: string =
    'https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder.png';

  constructor() {
    //al iniciar el componente
    console.log('contructor', 'img', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //pendiente a los cambios de los inputs
    console.log('ngOnChanges', 'img', this.img);

    console.log("changes", changes);
  }

  ngOnInit(): void {
    //before render => alista los datos al iniciar el componente
    //se pueden correr async
    console.log('ngOnInit', 'img', this.img);
    // this.counterFunction = window.setInterval(() => {
    //   console.log('Runcounter');
    //   this.counter += 1;
    // }, 1000);
  }

  ngAfterViewInit(): void {
    //manipular hijos del componente
    console.log('ngAfterViewInit', 'img', this.img);
  }

  ngOnDestroy(): void {
    //al destruir el componente
    console.log('ngOnDestroy', 'img', this.img);
    // clearInterval(this.counterFunction);
  }

  imgError() {
    this.img = this.defaultImage;
  }

  imgLoaded() {
    this.imgLoadEvent.emit(this.img);
  }
}
