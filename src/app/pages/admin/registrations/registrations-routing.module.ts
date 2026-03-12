import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { ChannelsComponent } from './channels/channels.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: 'clients',
        component: ClientsComponent,
    },
    {
        path: 'channels',
        component: ChannelsComponent,
    },
    {
        path: 'integrations',
        component: IntegrationsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'products',
        component: ProductsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegistrationsRoutingModule { }
