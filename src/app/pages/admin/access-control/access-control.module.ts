import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
    { path: 'groups', component: GroupsComponent },
    { path: 'features', component: FeaturesComponent },
    { path: '', redirectTo: 'groups', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class AccessControlModule {}
