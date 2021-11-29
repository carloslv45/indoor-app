import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperadoresPageRoutingModule } from './operadores-routing.module';

import { OperadoresPage } from './operadores.page';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { TrazoComponent } from './components/trazo/trazo.component';
import { CorteComponent } from './components/corte/corte.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { ImpresionComponent } from './components/impresion/impresion.component';
import { EstampacionComponent } from './components/estampacion/estampacion.component';
import { ConfeccionComponent } from './components/confeccion/confeccion.component';
import { EmpaqueComponent } from './components/empaque/empaque.component';
import { DespachosComponent } from './components/despachos/despachos.component';
import { DisenadorComponent } from './components/disenador/disenador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OperadoresPageRoutingModule
  ],
  declarations: [OperadoresPage,
    ProgramacionComponent,
    TrazoComponent,
    CorteComponent,
    EdicionComponent,
    ImpresionComponent,
    EstampacionComponent,
    ConfeccionComponent,
    EmpaqueComponent,
    DespachosComponent,
    DisenadorComponent]
})
export class OperadoresPageModule {}
