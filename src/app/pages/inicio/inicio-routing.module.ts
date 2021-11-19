import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { CrearClienteComponent } from 'src/app/shared/components/crear-cliente/crear-cliente.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
