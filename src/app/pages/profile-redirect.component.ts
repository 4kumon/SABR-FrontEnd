import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../@core/services/auth.service';

@Component({
    selector: 'ngx-profile-redirect',
    template: '',
})
export class ProfileRedirectComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const user = this.authService.getCurrentUser();
        if (user?.profile === 'interno') {
            this.router.navigate(['/pages/admin/dashboard']);
        } else {
            this.router.navigate(['/pages/client/dashboard']);
        }
    }
}
