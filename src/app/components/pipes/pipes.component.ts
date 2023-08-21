import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  frase: string = "MEU NOME É ALISSON"


  valor: number = 10

  today = new Date()

}
