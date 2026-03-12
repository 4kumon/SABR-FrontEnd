import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    canActivate(): boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            const user = this.authService.getCurrentUser();
            const redirect = user?.profile === 'interno'
                ? '/pages/admin/dashboard'
                : '/pages/client/dashboard';
            return this.router.createUrlTree([redirect]);
        }
        return true;
    }
}