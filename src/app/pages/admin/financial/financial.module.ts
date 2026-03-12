import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeRequestsComponent } from './recharge-requests/recharge-requests.component';

const routes: Routes = [
    { path: 'recharge-requests', component: RechargeRequestsComponent },
    { path: '', redirectTo: 'recharge-requests', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class FinancialModule {}
