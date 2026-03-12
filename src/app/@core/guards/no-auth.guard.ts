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
            // Já autenticado → redirecionar para dashboard
            return this.router.createUrlTree(['/pages/dashboard']);
        }
        return true;
    }
}