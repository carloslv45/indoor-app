import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'register-usuario',
    loadChildren: () => import('./register-usuario/register-usuario.module').then( m => m.RegisterUsuarioPageModule)
  },
  {
    path: 'register-admin',
    loadChildren: () => import('./register-admin/register-admin.module').then( m => m.RegisterAdminPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./pages/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
  },
  {
    path: 'crear-pedido',
    loadChildren: () => import('./pages/crear-pedido/crear-pedido.module').then( m => m.CrearPedidoPageModule)
  },
  {
    path: 'consultar-pedido',
    loadChildren: () => import('./pages/consultar-pedido/consultar-pedido.module').then( m => m.ConsultarPedidoPageModule)
  },
  {
    path: 'crear-prenda',
    loadChildren: () => import('./pages/consultar-prenda/consultar-prenda.module').then( m => m.ConsultarPrendaPageModule)
  },
  {
    path: 'crear-referencia',
    loadChildren: () => import('./pages/consultar-referencia/consultar-referencia.module').then( m => m.ConsultarReferenciaPageModule)
  },
  {
    path: 'modificar-pedido',
    loadChildren: () => import('./pages/modificar-pedido/modificar-pedido.module').then( m => m.ModificarPedidoPageModule)
  },
  {
    path: 'modificar-pedido-admin',
    loadChildren: () => import('./pages/modificar-pedido-admin/modificar-pedido-admin.module').then( m => m.ModificarPedidoAdminPageModule)
  },
  {
    path: 'consultar-pedido-admin',
    loadChildren: () => import('./pages/consultar-pedido-admin/consultar-pedido-admin.module').then( m => m.ConsultarPedidoAdminPageModule)
  },
  {
    path: 'operadores',
    loadChildren: () => import('./pages/operadores/operadores.module').then( m => m.OperadoresPageModule)
  },
  {
    path: 'seguimiento/:id',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },  {
    path: 'proceso-pedido',
    loadChildren: () => import('./pages/proceso-pedido/proceso-pedido.module').then( m => m.ProcesoPedidoPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
