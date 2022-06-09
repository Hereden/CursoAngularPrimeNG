import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  deshabilitar: boolean = false;
  mensaje= 'No se ha agregado ninguna persona.';
  titulo='Licenciatura';
  mostrar= false;

  agregarPersona():void{
    this.mensaje= 'Persona agregada.';
    this.mostrar=true;
  }

  modificarTitulo(event: Event):void{
    console.log("Entramos al metodo modificar titulo");
    this.titulo=(<HTMLInputElement>event.target).value;
  }
}
