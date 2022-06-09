import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  operandoA=0.0;
  operandoB=0.0;
  resultado=0.0;
  constructor() { }

  ngOnInit(): void {
  }

  sumar():void{
    this.resultado=this.operandoA+this.operandoB;
  }

}
