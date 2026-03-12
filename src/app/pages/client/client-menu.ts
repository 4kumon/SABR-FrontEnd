import { NbMenuItem } from '@nebular/theme';
import { TranslationService } from '../../@core/services/translation.service';

export function getClientMenu(t: TranslationService): NbMenuItem[] {
    return [
        {
            title: t.get('menu.client.dashboard'),
            icon: 'home-outline',
            link: '/pages/client/dashboard',
            home: true,
        },
        {
            title: t.get('menu.client.financial'),
            icon: 'credit-card-outline',
            link: '/pages/client/financial',
        },
        {
            title: t.get('menu.client.operation'),
            group: true,
        },
        {
            title: t.get('menu.client.allOrders'),
            icon: 'file-text-outline',
            link: '/pages/client/orders',
        },
        {
            title: t.get('menu.client.unpaidOrders'),
            icon: 'alert-circle-outline',
            link: '/pages/client/unpaid-orders',
        },
        {
            title: t.get('menu.client.invoices'),
            icon: 'file-outline',
            link: '/pages/client/invoices',
        },
        {
            title: t.get('menu.client.myProducts'),
            icon: 'shopping-bag-outline',
            link: '/pages/client/my-products',
        },
        {
            title: t.get('menu.client.publishCatalog'),
            icon: 'book-open-outline',
            link: '/pages/client/publish-catalog',
        },
        {
            title: t.get('menu.client.manualOrder'),
            icon: 'edit-outline',
            link: '/pages/client/manual-order',
        },
        {
            title: t.get('menu.client.returns'),
            icon: 'undo-outline',
            link: '/pages/client/returns',
        },
        {
            title: t.get('menu.client.integrations'),
            icon: 'globe-outline',
            link: '/pages/client/integrations',
        },
        {
            title: t.get('menu.client.customerService'),
            group: true,
        },
        {
            title: t.get('menu.client.support'),
            icon: 'message-circle-outline',
            link: '/pages/client/support',
        },
    ];
}
