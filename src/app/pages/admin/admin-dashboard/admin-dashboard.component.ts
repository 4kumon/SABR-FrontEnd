import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule } from '@nebular/theme';

interface KpiCard {
    title: string;
    value: string;
    icon?: string;
    badge?: { initial: string; color: string };
    link?: string;
    danger?: boolean;
    chart?: boolean;
}

@Component({
    selector: 'ngx-admin-dashboard',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbIconModule],
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {

    cards: KpiCard[] = [
        // Linha 1
        { title: 'PIX - Aguardando confirmação', value: '6', icon: 'bar-chart-outline', link: 'Ver comprovantes' },
        { title: 'Pagamentos Fornecedores', value: '0', icon: 'briefcase-outline', link: 'Ver pagamentos' },
        { title: 'Etiquetas para enviar', value: '0', icon: 'printer-outline', link: 'Ver etiquetas' },
        { title: 'Etiquetas impressas', value: '0', icon: 'checkmark-circle-outline', link: 'Ver' },
        // Linha 2
        { title: 'Pedidos Cancelados', value: '2.019', icon: 'close-circle-outline', link: 'Ver', danger: true },
        { title: 'Qtd Usuários', value: '14.396', icon: 'people-outline', link: 'Ver' },
        { title: 'Qtd Produtos', value: '1.093.609', icon: 'cube-outline', link: 'Ver' },
        { title: 'Valor Total Pedidos (15 dias)', value: 'R$ 965.977,20', icon: 'pricetags-outline' },
        // Linha 3 — Integrações
        { title: 'Qtd integrações Shopee', value: '9.555', badge: { initial: 'S', color: '#EE4D2D' } },
        { title: 'Qtd integrações Mercado Livre', value: '1.937', badge: { initial: 'M', color: '#FFE600' } },
        { title: 'Qtd integrações Shopify', value: '1.050', badge: { initial: 'S', color: '#96BF48' } },
        { title: 'Qtd integrações Loja Integrada', value: '0', badge: { initial: 'L', color: '#00B4AB' } },
        // Linha 4 — Gráficos
        { title: 'Vendas (15 dias)', value: '', icon: 'trending-up-outline', chart: true },
        { title: 'Vendas por Canal (15 dias)', value: '', icon: 'pie-chart-outline', chart: true },
    ];
}
