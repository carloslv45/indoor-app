import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ModificarPedidoComponent } from './components/modificar-pedido/modificar-pedido.component';
import { VerPedidoComponent } from './components/ver-pedido/ver-pedido.component';


@NgModule({
  declarations: [CrearPedidoComponent, ModificarPedidoComponent, VerPedidoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CrearPedidoComponent, ModificarPedidoComponent, VerPedidoComponent]
})
export class SharedModule { }
