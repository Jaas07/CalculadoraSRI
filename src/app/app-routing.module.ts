import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteInpuestoComponent } from './reporte-inpuesto/reporte-inpuesto.component';

const routes: Routes = [ 
  { path: 'informacion', component: InformacionComponent },
  { path: 'reporte', component:  ReporteComponent},
  { path: 'menu', component:  MenuComponent},
  { path: 'reporte-inpuestos', component:  ReporteInpuestoComponent},
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/informacion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
