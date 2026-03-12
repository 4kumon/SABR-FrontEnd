import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegradoComponent } from './integrado/integrado.component';

const routes: Routes = [
    { path: 'integrado', component: IntegradoComponent },
    { path: '', redirectTo: 'integrado', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class PedidosModule {}
