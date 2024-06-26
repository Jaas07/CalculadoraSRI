import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { gasto, inpuesto } from './Gasto';
import { Observable } from 'rxjs';
const configUrl='assets/datos.json'; 
const configUrl2='http://localhost:3000/api/obtenerDatos'; 
const configUrl3='http://localhost:3000/api/agregarFactura';
@Injectable({
  providedIn: 'root'
})

export class GastoService {
  constructor(private http: HttpClient) { }


  obtenerInpuestos(){ 
    return this.http.get<inpuesto[]>(configUrl2); 
  }
  AgregarImpuestos(datos: any): Observable<any> {
    return this.http.post<any>(configUrl3, datos);
  }
}