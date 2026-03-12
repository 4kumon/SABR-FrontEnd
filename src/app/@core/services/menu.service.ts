import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './auth.service';
import { TranslationService } from './translation.service';
import { getAdminMenu } from '../../pages/admin/admin-menu';
import { getClientMenu } from '../../pages/client/client-menu';

@Injectable({ providedIn: 'root' })
export class MenuService {

    constructor(
        private authService: AuthService,
        private t: TranslationService,
    ) {}

    getMenuItems(): NbMenuItem[] {
        const user = this.authService.getCurrentUser();
        if (!user) return [];
        return user.profile === 'interno'
            ? getAdminMenu(this.t)
            : getClientMenu(this.t);
    }
}
