import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUsuarioPageRoutingModule } from './register-usuario-routing.module';

import { RegisterUsuarioPage } from './register-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterUsuarioPage]
})
export class RegisterUsuarioPageModule {}
