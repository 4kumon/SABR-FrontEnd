import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { CanaisComponent } from './canais/canais.component';
import { IntegracaoComponent } from './integracao/integracao.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
    {
        path: 'cliente',
        component: ClienteComponent,
    },
    {
        path: 'canais',
        component: CanaisComponent,
    },
    {
        path: 'integracao',
        component: IntegracaoComponent,
    },
    {
        path: 'usuario',
        component: UsuarioComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CadastroRoutingModule { }