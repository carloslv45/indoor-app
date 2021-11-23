import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPrendaPageRoutingModule } from './consultar-prenda-routing.module';

import { ConsultarPrendaPage } from './consultar-prenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPrendaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultarPrendaPage]
})
export class ConsultarPrendaPageModule {}
