import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { CanaisListComponent } from './canais/canais-list/canais-list.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'canais',
    component: CanaisListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule { }