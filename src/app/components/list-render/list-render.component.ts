import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[]= [
    {
      name: "Turca", type: "Dog", age: 4  },
    { name: "Tom", type: "Dog", age: 10 },
    {
      name: "Frida", type: "Cat", age: 5
    },
    { name: "Bob", type: "Horse", age: 1 },
  ];
  animalDetails = ''
  showAge(animal: Animal):void { 
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
