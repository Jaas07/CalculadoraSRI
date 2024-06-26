import { Component } from '@angular/core';
import { gasto, inpuesto } from '../Gasto';
import { GastoService } from '../gasto.service';

@Component({
  selector: 'app-reporte-inpuesto',
  templateUrl: './reporte-inpuesto.component.html',
  styleUrl: './reporte-inpuesto.component.css'
})
export class ReporteInpuestoComponent {
  ngOnInit(): void {
  }
  Inpuestos: inpuesto[]=[];
    constructor(private gastoService:GastoService){
    this.gastoService.obtenerInpuestos().subscribe(data =>
      {
        this.Inpuestos=data;
        console.log(data);
      });
    }
}
