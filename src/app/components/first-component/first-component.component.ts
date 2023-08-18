import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Alisson';
  idade: number = 30;
  job: string = 'Programador'
  hobbies = ["estudar", "ler", "dirigir"]
  car= { 
    name: 'Gol',
    year: '2012',
    color: 'Red'
  }
}
