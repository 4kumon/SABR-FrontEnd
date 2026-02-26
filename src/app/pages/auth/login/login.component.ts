import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NbInputModule, NbButtonModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { AuthService } from '../../../@core/services/auth.service';
import { NotificationService } from '../../../@core/services/notification.service';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbSpinnerModule,
    ],
})
export class LoginComponent {

    loginForm: FormGroup;
    loading = false;
    showPassword = false;
    errorMessage: string | null = null;

    ngOnInit(): void {
        // Esconder o spinner global quando a tela de login estiver pronta
        const spinner = document.getElementById('nb-global-spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private notification: NotificationService,
        private router: Router,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    toggleShowPassword(): void {
        this.showPassword = !this.showPassword;
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.loading = true;
        this.errorMessage = null;

        const { email, password } = this.loginForm.value;

        setTimeout(() => {
            const result = this.authService.login(email, password);

            if (result.success) {
                // Reexibir o spinner durante o redirecionamento para o dashboard
                const spinner = document.getElementById('nb-global-spinner');
                if (spinner) {
                    spinner.style.display = '';
                }
                this.notification.success('Login realizado com sucesso!');
                this.router.navigate(['/pages/dashboard']);
            } else {
                this.errorMessage = result.error || 'Erro ao realizar login.';
                this.notification.error(this.errorMessage);
            }

            this.loading = false;
        }, 800);

    }

    isInvalid(fieldName: string): boolean {
        const control = this.loginForm.get(fieldName);
        return !!(control && control.invalid && control.touched);
    }

    getErrorMessage(fieldName: string): string {
        const control = this.loginForm.get(fieldName);
        if (!control) return '';
        if (control.hasError('required')) {
            return fieldName === 'email' ? 'E-mail é obrigatório' : 'Senha é obrigatória';
        }
        if (control.hasError('email')) {
            return 'E-mail inválido';
        }
        return '';
    }
}