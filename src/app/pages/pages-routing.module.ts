import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProfileRedirectComponent } from './profile-redirect.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { RoleGuard } from '../@core/guards/role.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // Profile-based redirect for /pages
    {
      path: '',
      component: ProfileRedirectComponent,
      pathMatch: 'full',
    },

    // Backward compat: old /pages/dashboard → redirect
    {
      path: 'dashboard',
      redirectTo: '',
      pathMatch: 'full',
    },
    {
      path: 'iot-dashboard',
      redirectTo: '',
      pathMatch: 'full',
    },

    // ── Admin routes ─────────────────────────────────
    {
      path: 'admin',
      canActivate: [RoleGuard],
      data: { roles: ['interno'] },
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module')
            .then(m => m.AdminDashboardModule),
        },
        {
          path: 'perfil',
          loadChildren: () => import('./admin/perfil/perfil.module')
            .then(m => m.PerfilModule),
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
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
      ],
    },

    // ── Client routes ────────────────────────────────
    {
      path: 'client',
      canActivate: [RoleGuard],
      data: { roles: ['cliente'] },
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('./cliente/cliente-dashboard/cliente-dashboard.module')
            .then(m => m.ClienteDashboardModule),
        },
        {
          path: 'meus-produtos',
          loadChildren: () => import('./cliente/meus-produtos/meus-produtos.module')
            .then(m => m.MeusProdutosModule),
        },
        {
          path: 'pedidos',
          loadChildren: () => import('./cliente/pedidos/cliente-pedidos.module')
            .then(m => m.ClientePedidosModule),
        },
        {
          path: 'financeiro',
          loadChildren: () => import('./cliente/financeiro/cliente-financeiro.module')
            .then(m => m.ClienteFinanceiroModule),
        },
        {
          path: 'integracoes',
          loadChildren: () => import('./cliente/integracoes/cliente-integracoes.module')
            .then(m => m.ClienteIntegracoesModule),
        },
        // Placeholder routes
        {
          path: 'pedidos-nao-pagos',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Pedidos Não Pagos' },
        },
        {
          path: 'notas-fiscais',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Notas Fiscais' },
        },
        {
          path: 'publicar-catalogo',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Publicar Catálogo' },
        },
        {
          path: 'pedido-manual',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Pedido Manual' },
        },
        {
          path: 'devolucoes',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Devoluções' },
        },
        {
          path: 'suporte',
          loadChildren: () => import('./cliente/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Suporte' },
        },
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
      ],
    },

    // ── Shared routes ────────────────────────────────
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
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
