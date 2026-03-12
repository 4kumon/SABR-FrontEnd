import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { AuthService } from '../../../@core/services/auth.service';

@Component({
    selector: 'ngx-cliente-dashboard',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbIconModule],
    templateUrl: './cliente-dashboard.component.html',
})
export class ClienteDashboardComponent implements OnInit {
    userName = '';
    storeName = '';

    kpis = [
        { title: 'Nr. de Vendas', value: '0', icon: 'shopping-cart-outline', subtitle: 'no mês' },
        { title: 'Pedido(s) para pagar', value: '0', icon: 'credit-card-outline', subtitle: '' },
        { title: 'Pedido(s) sem vínculo', value: '0', icon: 'alert-triangle-outline', subtitle: '' },
    ];

    stats = [
        { title: 'Qtd prod. cadastrado(s)', value: '0', icon: 'cube-outline' },
        { title: 'Vendas últimos 30 dias', value: 'R$ 0,00', icon: 'trending-up-outline' },
        { title: 'Vendas Hoje', value: 'R$ 0', icon: 'activity-outline' },
    ];

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        const user = this.authService.getCurrentUser();
        if (user) {
            this.userName = user.name;
            this.storeName = user.store_name;
        }
    }
}
