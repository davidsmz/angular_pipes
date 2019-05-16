import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'David';
  lastName = 'daVid SantA maRia zaVAleta';
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'Primero',
      house: '50'
    }
  };

  valueOfPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });

  date = new Date();

  paramVideo = 'jIvxOT02Taw';
  urlVideo: 'https://www.youtube-nocookie.com/embed/84eaOcOzCUE';

  showPassword: boolean;
  constructor() {
    this.showPassword = false;
  }

  status() {
    if (this.showPassword) {
      return 'Disable';
    } else {
      return 'Enable';
    }
  }

  color() {
    if (this.showPassword) {
      return 'danger';
    } else {
      return 'primary';
    }
  }
}
