import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service'; 
import { gasto } from '../Gasto';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {
  gastos:gasto[]=[];
  /*constructor(private gastoService:GastoService) {
    this.gastoService.obtenerDatos().subscribe(data => 
      { 
        console.log(data); 
        this.gastos=data; 
      }); 
  }*/

  ngOnInit(): void {}

  ruc: string = '99999999001';
  valor: number = 0.0;
  gasto: string = 'Ninguno';
  
}