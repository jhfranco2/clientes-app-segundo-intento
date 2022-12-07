import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = 'Bienvenido a Angular';

  curso:string = 'Curso Spring 5 con angular 15'
  alumno:string = 'Jhoan Mateo Franco Vargas'
}
