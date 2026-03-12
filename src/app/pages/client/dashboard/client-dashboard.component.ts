import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { AuthService } from '../../../@core/services/auth.service';
import { TranslationService } from '../../../@core/services/translation.service';
import { TranslatePipe } from '../../../@core/pipes/translate.pipe';

@Component({
    selector: 'ngx-client-dashboard',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbIconModule, TranslatePipe],
    templateUrl: './client-dashboard.component.html',
})
export class ClientDashboardComponent implements OnInit {
    userName = '';
    storeName = '';

    kpis: any[] = [];
    stats: any[] = [];

    constructor(
        private authService: AuthService,
        private t: TranslationService,
    ) {
        this.kpis = [
            { title: this.t.get('dashboard.client.salesCount'), value: '0', icon: 'shopping-cart-outline', subtitle: this.t.get('common.perMonth') },
            { title: this.t.get('dashboard.client.ordersToPay'), value: '0', icon: 'credit-card-outline', subtitle: '' },
            { title: this.t.get('dashboard.client.ordersUnlinked'), value: '0', icon: 'alert-triangle-outline', subtitle: '' },
        ];

        this.stats = [
            { title: this.t.get('dashboard.client.registeredProducts'), value: '0', icon: 'cube-outline' },
            { title: this.t.get('dashboard.client.salesLast30d'), value: 'R$ 0,00', icon: 'trending-up-outline' },
            { title: this.t.get('dashboard.client.salesToday'), value: 'R$ 0', icon: 'activity-outline' },
        ];
    }

    ngOnInit(): void {
        const user = this.authService.getCurrentUser();
        if (user) {
            this.userName = user.name;
            this.storeName = user.store_name;
        }
    }
}
