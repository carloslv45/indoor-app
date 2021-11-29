import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoPedidoPageRoutingModule } from './proceso-pedido-routing.module';

import { ProcesoPedidoPage } from './proceso-pedido.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoPedidoPageRoutingModule,
    ChartsModule
  ],
  declarations: [ProcesoPedidoPage]
})
export class ProcesoPedidoPageModule {}
