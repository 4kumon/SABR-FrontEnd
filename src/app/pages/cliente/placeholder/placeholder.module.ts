import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePlaceholderComponent } from './placeholder.component';

const routes: Routes = [
    { path: '', component: ClientePlaceholderComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ClientePlaceholderComponent],
})
export class ClientePlaceholderModule {}
