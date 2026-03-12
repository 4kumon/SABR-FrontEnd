import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './pages/auth/login/login.component';
import { RequestPasswordComponent } from './pages/auth/request-password/request-password.component';
import { AuthGuard } from './@core/guards/auth.guard';
import { NoAuthGuard } from './@core/guards/no-auth.guard';

export const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        component: NbAuthComponent,
        canActivate: [NoAuthGuard],
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'request-password',
                component: RequestPasswordComponent,
            },
        ],
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login' },
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}