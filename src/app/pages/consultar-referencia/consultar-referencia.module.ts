import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarReferenciaPageRoutingModule } from './consultar-referencia-routing.module';

import { ConsultarReferenciaPage } from './consultar-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarReferenciaPageRoutingModule
  ],
  declarations: [ConsultarReferenciaPage]
})
export class ConsultarReferenciaPageModule {}
