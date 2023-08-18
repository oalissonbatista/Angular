import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Joaquim';

  userData = {
    email: 'Joaquim@hotmail.com',
    role: 'Administrador'
  }
  title = 'curso-angular';
}
