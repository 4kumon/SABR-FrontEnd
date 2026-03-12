import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDashboardComponent } from './cliente-dashboard.component';

const routes: Routes = [
    { path: '', component: ClienteDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ClienteDashboardComponent],
})
export class ClienteDashboardModule {}
