import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ModificarPedidoComponent } from './components/modificar-pedido/modificar-pedido.component';
import { VerPedidoComponent } from './components/ver-pedido/ver-pedido.component';
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { CrearPrendaComponent } from './components/crear-prenda/crear-prenda.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  // eslint-disable-next-line max-len
  declarations: [CrearPedidoComponent, ModificarPedidoComponent, VerPedidoComponent, CrearReferenciaComponent, CrearPrendaComponent, CrearClienteComponent , ModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // eslint-disable-next-line max-len
  exports: [CrearPedidoComponent ,ModalComponent, ModificarPedidoComponent, VerPedidoComponent, CrearReferenciaComponent, CrearPrendaComponent, CrearClienteComponent]
})
export class SharedModule { }
