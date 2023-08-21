import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  myNumber: number = 0;
  color = 'blue'

  onChangeNumber() { 
    this.myNumber = Math.floor(Math.random() * 100)
  }

}
