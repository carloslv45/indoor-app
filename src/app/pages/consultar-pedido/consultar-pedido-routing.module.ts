import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPedidoPage } from './consultar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPedidoPageRoutingModule {}
