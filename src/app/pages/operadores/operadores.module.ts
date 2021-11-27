import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperadoresPageRoutingModule } from './operadores-routing.module';

import { OperadoresPage } from './operadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperadoresPageRoutingModule
  ],
  declarations: [OperadoresPage]
})
export class OperadoresPageModule {}
