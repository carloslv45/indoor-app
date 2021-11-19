import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarReferenciaPage } from './consultar-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarReferenciaPageRoutingModule {}
