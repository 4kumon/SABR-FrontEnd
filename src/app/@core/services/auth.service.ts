import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridMockDataService } from '../mock/ag-grid-mock-data.service';
import { Usuario } from '../models/ag-grid.models';

export interface AuthLoginResult {
    success: boolean;
    error?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    private readonly AUTH_STORAGE_KEY = 'sabr_auth_user';

    constructor(
        private mockDataService: AgGridMockDataService,
        private router: Router,
    ) {}

    login(email: string, password: string): AuthLoginResult {
        const user = this.mockDataService.findUserByEmail(email);

        if (!user || user.password !== password) {
            return { success: false, error: 'E-mail ou senha inválidos.' };
        }

        if (user.is_blocked) {
            return { success: false, error: 'Usuário bloqueado.' };
        }

        if (!user.status) {
            return { success: false, error: 'Usuário inativo.' };
        }

        // Salvar no localStorage (sem a senha)
        const { password: _, ...safeUser } = user;
        localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(safeUser));
        return { success: true };
    }

    logout(): void {
        localStorage.removeItem(this.AUTH_STORAGE_KEY);
        this.router.navigate(['/auth/login']);
    }

    isAuthenticated(): boolean {
        const stored = localStorage.getItem(this.AUTH_STORAGE_KEY);
        if (!stored) return false;
        try {
            const user = JSON.parse(stored);
            return !!user && !!user.id && !!user.email;
        } catch {
            return false;
        }
    }

    getCurrentUser(): Usuario | null {
        const stored = localStorage.getItem(this.AUTH_STORAGE_KEY);
        if (!stored) return null;
        try {
            return JSON.parse(stored) as Usuario;
        } catch {
            return null;
        }
    }
}