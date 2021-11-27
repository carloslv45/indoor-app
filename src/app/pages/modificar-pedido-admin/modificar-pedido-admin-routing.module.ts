import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPedidoAdminPage } from './modificar-pedido-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPedidoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPedidoAdminPageRoutingModule {}
