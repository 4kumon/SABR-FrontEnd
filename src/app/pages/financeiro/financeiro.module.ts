import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesRecargaComponent } from './solicitacoes-recarga/solicitacoes-recarga.component';

const routes: Routes = [
    { path: 'solicitacoes-recarga', component: SolicitacoesRecargaComponent },
    { path: '', redirectTo: 'solicitacoes-recarga', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class FinanceiroModule {}
