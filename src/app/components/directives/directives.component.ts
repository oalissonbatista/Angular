import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size = 50;
  color = 'red';
  font = 'Arial';

  classes = ['green-title', 'small-title']
  underline = 'underline-title';
}
