import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfeccionComponent } from './components/confeccion/confeccion.component';
import { CorteComponent } from './components/corte/corte.component';
import { DespachosComponent } from './components/despachos/despachos.component';
import { DisenadorComponent } from './components/disenador/disenador.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { EmpaqueComponent } from './components/empaque/empaque.component';
import { EstampacionComponent } from './components/estampacion/estampacion.component';
import { ImpresionComponent } from './components/impresion/impresion.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { TrazoComponent } from './components/trazo/trazo.component';

import { OperadoresPage } from './operadores.page';

const routes: Routes = [
  {
    path: '',
    component: OperadoresPage
  },
  {
    path: 'programacion',
    component: ProgramacionComponent
  },
  {
    path: 'trazo',
    component: TrazoComponent
  },
  {
    path: 'corte',
    component: CorteComponent
  },
  {
    path: 'edicion',
    component: EdicionComponent
  },
  {
    path: 'impresion',
    component: ImpresionComponent
  },
  {
    path: 'estampacion',
    component: EstampacionComponent
  },
  {
    path: 'confeccion',
    component: ConfeccionComponent
  },
  {
    path: 'empaque',
    component: EmpaqueComponent
  },
  {
    path: 'envio',
    component: DespachosComponent
  },
  {
    path: 'alistamiento',
    component: DisenadorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadoresPageRoutingModule {}
