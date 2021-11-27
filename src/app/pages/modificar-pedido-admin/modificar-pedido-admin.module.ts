import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPedidoAdminPageRoutingModule } from './modificar-pedido-admin-routing.module';

import { ModificarPedidoAdminPage } from './modificar-pedido-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPedidoAdminPageRoutingModule
  ],
  declarations: [ModificarPedidoAdminPage]
})
export class ModificarPedidoAdminPageModule {}
