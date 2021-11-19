import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPedidoPageRoutingModule } from './consultar-pedido-routing.module';

import { ConsultarPedidoPage } from './consultar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPedidoPageRoutingModule
  ],
  declarations: [ConsultarPedidoPage]
})
export class ConsultarPedidoPageModule {}
