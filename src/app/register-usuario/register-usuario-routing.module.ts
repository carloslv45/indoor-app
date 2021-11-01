import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUsuarioPage } from './register-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUsuarioPageRoutingModule {}
