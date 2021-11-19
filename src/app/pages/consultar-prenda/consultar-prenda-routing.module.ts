import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPrendaPage } from './consultar-prenda.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPrendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPrendaPageRoutingModule {}
