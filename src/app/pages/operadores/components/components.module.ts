import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgramacionComponent } from './programacion/programacion.component';
import { TrazoComponent } from './trazo/trazo.component';
import { CorteComponent } from './corte/corte.component';
import { EdicionComponent } from './edicion/edicion.component';
import { ImpresionComponent } from './impresion/impresion.component';
import { EstampacionComponent } from './estampacion/estampacion.component';
import { ConfeccionComponent } from './confeccion/confeccion.component';
import { EmpaqueComponent } from './empaque/empaque.component';
import { DespachosComponent } from './despachos/despachos.component';
import { DisenadorComponent } from './disenador/disenador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProgramacionComponent,
    TrazoComponent,
    CorteComponent,
    EdicionComponent,
    ImpresionComponent,
    EstampacionComponent,
    ConfeccionComponent,
    EmpaqueComponent,
    DespachosComponent,
    DisenadorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProgramacionComponent,
    TrazoComponent,
    CorteComponent,
    EdicionComponent,
    ImpresionComponent,
    EstampacionComponent,
    ConfeccionComponent,
    EmpaqueComponent,
    DespachosComponent,
    DisenadorComponent
  ]
})
export class ComponentsModule { }
