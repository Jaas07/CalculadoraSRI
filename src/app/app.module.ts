import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './gasto.service';
import { ReporteInpuestoComponent } from './reporte-inpuesto/reporte-inpuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent,
    ReporteInpuestoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
