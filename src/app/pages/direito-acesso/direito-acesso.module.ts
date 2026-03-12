import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './grupos/grupos.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';

const routes: Routes = [
    { path: 'grupos', component: GruposComponent },
    { path: 'funcionalidades', component: FuncionalidadesComponent },
    { path: '', redirectTo: 'grupos', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class DireitoAcessoModule {}
