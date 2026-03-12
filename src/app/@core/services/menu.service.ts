import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './auth.service';
import { ADMIN_MENU_ITEMS } from '../../pages/menu/admin-menu';
import { CLIENTE_MENU_ITEMS } from '../../pages/menu/cliente-menu';

@Injectable({ providedIn: 'root' })
export class MenuService {

    constructor(private authService: AuthService) {}

    getMenuItems(): NbMenuItem[] {
        const user = this.authService.getCurrentUser();
        if (!user) return [];
        return user.profile === 'interno'
            ? ADMIN_MENU_ITEMS
            : CLIENTE_MENU_ITEMS;
    }
}
