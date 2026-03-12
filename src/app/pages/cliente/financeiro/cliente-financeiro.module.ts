import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePlaceholderComponent } from '../placeholder/placeholder.component';

const routes: Routes = [
    { path: '', component: ClientePlaceholderComponent, data: { title: 'Financeiro' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ClientePlaceholderComponent],
})
export class ClienteFinanceiroModule {}
