import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { TranslationService } from '../../../@core/services/translation.service';
import { TranslatePipe } from '../../../@core/pipes/translate.pipe';

interface KpiCard {
    title: string;
    value: string;
    icon?: string;
    badge?: { image: string };
    link?: string;
    danger?: boolean;
    chart?: boolean;
}

@Component({
    selector: 'ngx-admin-dashboard',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbIconModule, TranslatePipe],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardComponent {

    cards: KpiCard[];

    constructor(private t: TranslationService) {
        this.cards = [
            { title: this.t.get('dashboard.admin.pixWaiting'), value: '6', icon: 'bar-chart-outline', link: this.t.get('dashboard.admin.viewReceipts') },
            { title: this.t.get('dashboard.admin.supplierPayments'), value: '0', icon: 'briefcase-outline', link: this.t.get('dashboard.admin.viewPayments') },
            { title: this.t.get('dashboard.admin.labelsToSend'), value: '0', icon: 'printer-outline', link: this.t.get('dashboard.admin.viewLabels') },
            { title: this.t.get('dashboard.admin.labelsPrinted'), value: '0', icon: 'checkmark-circle-outline', link: this.t.get('common.view') },
            { title: this.t.get('dashboard.admin.cancelledOrders'), value: '2.019', icon: 'close-circle-outline', link: this.t.get('common.view'), danger: true },
            { title: this.t.get('dashboard.admin.userCount'), value: '14.396', icon: 'people-outline', link: this.t.get('common.view') },
            { title: this.t.get('dashboard.admin.productCount'), value: '1.093.609', icon: 'cube-outline', link: this.t.get('common.view') },
            { title: this.t.get('dashboard.admin.totalOrders15d'), value: 'R$ 965.977,20', icon: 'pricetags-outline' },
            { title: this.t.get('dashboard.admin.integrationsShopee'), value: '9.555', badge: { image: 'assets/images/canais/shopee.png' } },
            { title: this.t.get('dashboard.admin.integrationsMercadoLivre'), value: '1.937', badge: { image: 'assets/images/canais/mercadolivre.png' } },
            { title: this.t.get('dashboard.admin.integrationsShopify'), value: '1.050', badge: { image: 'assets/images/canais/shopify.png' } },
            { title: this.t.get('dashboard.admin.integrationsLojaIntegrada'), value: '0', badge: { image: 'assets/images/canais/lojaintegrada.png' } },
            { title: this.t.get('dashboard.admin.sales15d'), value: '', icon: 'trending-up-outline', chart: true },
            { title: this.t.get('dashboard.admin.salesByChannel15d'), value: '', icon: 'pie-chart-outline', chart: true },
        ];
    }
}
