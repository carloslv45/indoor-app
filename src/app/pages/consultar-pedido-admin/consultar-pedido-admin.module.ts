import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPedidoAdminPageRoutingModule } from './consultar-pedido-admin-routing.module';

import { ConsultarPedidoAdminPage } from './consultar-pedido-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPedidoAdminPageRoutingModule
  ],
  declarations: [ConsultarPedidoAdminPage]
})
export class ConsultarPedidoAdminPageModule {}
