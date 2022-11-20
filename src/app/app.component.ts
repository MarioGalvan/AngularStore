import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TiendaAngular';
  image = 'https://source.unsplash.com/random';
  name = 'mario';
  buttondisable = true;
  counter = 0;
  maxWith = 100;
  register={
    name: '',
    email: '',
    password: '',
  }
  person = {
    name: 'mario',
    age: 25,
    address: 'Calle 1',
  };
  names: string[] = [];
  products: Product[] = [
    {
      name: 'Producto 1',
      price: 100,
      description: 'Producto 1',
      img: 'https://picsum.photos/200',
    },
    {
      name: 'Producto 2',
      price: 200,
      description: 'Producto 2',
      img: 'https://picsum.photos/200',
    },
    {
      name: 'Producto 3',
      price: 300,
      description: 'Producto 3',
      img: 'https://loremflickr.com/320/240',
    },
    {
      name: 'Producto 4',
      price: 400,
      description: 'Producto 4',
      img: 'https://loremflickr.com/320/240',

    },
    {
      name: 'Producto 5',
      price: 500,
      description: 'Producto 5',
      img: 'https://loremflickr.com/320/240',
    }
  ];

  toogleButton() {
    this.counter++;
  }
  counterReset() {
    this.counter = 0;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log('element.scrollTop', element.scrollTop);
  }

  onKeyUp(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    console.log('element.value', element.value);
    this.person.name = element.value;
  }

  handleSaveName(name: string) {
    this.names.push(name);
  }

  handleDeleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log('this.register', this.register);
  }
}
