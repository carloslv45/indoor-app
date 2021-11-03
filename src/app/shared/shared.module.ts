import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';


@NgModule({
  declarations: [CrearPedidoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CrearPedidoComponent]
})
export class SharedModule { }
