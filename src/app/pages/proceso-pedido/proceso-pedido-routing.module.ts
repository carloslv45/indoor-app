import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesoPedidoPage } from './proceso-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesoPedidoPageRoutingModule {}
