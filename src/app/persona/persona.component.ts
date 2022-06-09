import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  nombre: string='Juan';
  apellido: string ='Perez';
  edad: number= 27;

  getEdad(): number{
    return this.edad;
  }

}