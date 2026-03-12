import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'cadastro',
      loadChildren: () => import('./cadastro/cadastro.module')
        .then(m => m.CadastroModule),
    },
    {
      path: 'financeiro',
      loadChildren: () => import('./financeiro/financeiro.module')
        .then(m => m.FinanceiroModule),
    },
    {
      path: 'pedidos',
      loadChildren: () => import('./pedidos/pedidos.module')
        .then(m => m.PedidosModule),
    },
    {
      path: 'direito-acesso',
      loadChildren: () => import('./direito-acesso/direito-acesso.module')
        .then(m => m.DireitoAcessoModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
