import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NbAuthResult, NbAuthStrategy, NbAuthStrategyClass } from '@nebular/auth';
import { AuthService } from '../services/auth.service';

export interface SabrAuthStrategyOptions {
    name: string;
    delay?: number;
}

@Injectable()
export class SabrAuthStrategy extends NbAuthStrategy {

    protected defaultOptions: SabrAuthStrategyOptions = {
        name: 'email',
        delay: 800,
    };

    static setup(options: SabrAuthStrategyOptions): [NbAuthStrategyClass, SabrAuthStrategyOptions] {
        return [SabrAuthStrategy, options] as [NbAuthStrategyClass, SabrAuthStrategyOptions];
    }

    constructor(private authService: AuthService) {
        super();
    }

    authenticate(data?: any): Observable<NbAuthResult> {
        const email = data?.email;
        const password = data?.password;

        if (!email || !password) {
            return of(new NbAuthResult(
                false, null, null, ['E-mail e senha são obrigatórios.'],
            ));
        }

        const result = this.authService.login(email, password);
        const delayMs = this.getOption('delay') || 800;

        if (result.success) {
            return of(new NbAuthResult(
                true, null, '/pages/dashboard', [], ['Login realizado com sucesso!'],
            )).pipe(delay(delayMs));
        }

        return of(new NbAuthResult(
            false, null, null, [result.error || 'Erro ao realizar login.'],
        )).pipe(delay(delayMs));
    }

    register(data?: any): Observable<NbAuthResult> {
        return of(new NbAuthResult(false));
    }

    requestPassword(data?: any): Observable<NbAuthResult> {
        return of(new NbAuthResult(false));
    }

    resetPassword(data?: any): Observable<NbAuthResult> {
        return of(new NbAuthResult(false));
    }

    logout(): Observable<NbAuthResult> {
        this.authService.logout();
        return of(new NbAuthResult(true, null, '/auth/login', [], ['Logout realizado.']));
    }

    refreshToken(data?: any): Observable<NbAuthResult> {
        return of(new NbAuthResult(false));
    }
}
