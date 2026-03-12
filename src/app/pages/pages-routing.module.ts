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
          loadChildren: () => import('./admin/dashboard/dashboard.module')
            .then(m => m.AdminDashboardModule),
        },
        {
          path: 'profile',
          loadChildren: () => import('./admin/profile/profile.module')
            .then(m => m.ProfileModule),
        },
        {
          path: 'registrations',
          loadChildren: () => import('./admin/registrations/registrations.module')
            .then(m => m.RegistrationsModule),
        },
        {
          path: 'financial',
          loadChildren: () => import('./admin/financial/financial.module')
            .then(m => m.FinancialModule),
        },
        {
          path: 'orders',
          loadChildren: () => import('./admin/orders/orders.module')
            .then(m => m.OrdersModule),
        },
        {
          path: 'access-control',
          loadChildren: () => import('./admin/access-control/access-control.module')
            .then(m => m.AccessControlModule),
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
          loadChildren: () => import('./client/dashboard/client-dashboard.module')
            .then(m => m.ClientDashboardModule),
        },
        {
          path: 'my-products',
          loadChildren: () => import('./client/my-products/my-products.module')
            .then(m => m.MyProductsModule),
        },
        {
          path: 'orders',
          loadChildren: () => import('./client/orders/client-orders.module')
            .then(m => m.ClientOrdersModule),
        },
        {
          path: 'financial',
          loadChildren: () => import('./client/financial/client-financial.module')
            .then(m => m.ClientFinancialModule),
        },
        {
          path: 'integrations',
          loadChildren: () => import('./client/integrations/client-integrations.module')
            .then(m => m.ClientIntegrationsModule),
        },
        // Placeholder routes
        {
          path: 'unpaid-orders',
          loadChildren: () => import('./client/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Pedidos Não Pagos' },
        },
        {
          path: 'invoices',
          loadChildren: () => import('./client/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Notas Fiscais' },
        },
        {
          path: 'publish-catalog',
          loadChildren: () => import('./client/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Publicar Catálogo' },
        },
        {
          path: 'manual-order',
          loadChildren: () => import('./client/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Pedido Manual' },
        },
        {
          path: 'returns',
          loadChildren: () => import('./client/placeholder/placeholder.module')
            .then(m => m.ClientePlaceholderModule),
          data: { title: 'Devoluções' },
        },
        {
          path: 'support',
          loadChildren: () => import('./client/placeholder/placeholder.module')
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
