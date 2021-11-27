import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPedidoAdminPage } from './consultar-pedido-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPedidoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPedidoAdminPageRoutingModule {}
