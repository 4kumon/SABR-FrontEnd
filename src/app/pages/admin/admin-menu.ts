import { NbMenuItem } from '@nebular/theme';
import { TranslationService } from '../../@core/services/translation.service';

export function getAdminMenu(t: TranslationService): NbMenuItem[] {
    return [
        {
            title: t.get('menu.admin.dashboard'),
            icon: 'home-outline',
            link: '/pages/admin/dashboard',
            home: true,
        },
        {
            title: t.get('menu.admin.profile'),
            icon: 'person-outline',
            link: '/pages/admin/profile',
        },
        {
            title: t.get('menu.admin.registrations'),
            icon: 'edit-2-outline',
            children: [
                { title: t.get('menu.admin.channels'), icon: 'radio-outline', link: '/pages/admin/registrations/channels' },
                { title: t.get('menu.admin.clients'), icon: 'people-outline', link: '/pages/admin/registrations/clients' },
                { title: t.get('menu.admin.integrations'), icon: 'globe-outline', link: '/pages/admin/registrations/integrations' },
                { title: t.get('menu.admin.products'), icon: 'shopping-bag-outline', link: '/pages/admin/registrations/products' },
                { title: t.get('menu.admin.users'), icon: 'person-outline', link: '/pages/admin/registrations/users' },
            ],
        },
        {
            title: t.get('menu.admin.financial'),
            icon: 'credit-card-outline',
            children: [
                { title: t.get('menu.admin.rechargeRequests'), icon: 'pantone-outline', link: '/pages/admin/financial/recharge-requests' },
            ],
        },
        {
            title: t.get('menu.admin.orders'),
            icon: 'file-text-outline',
            link: '/pages/admin/orders',
        },
        {
            title: t.get('menu.admin.accessControl'),
            icon: 'eye-outline',
            children: [
                { title: t.get('menu.admin.groups'), icon: 'pie-chart-outline', link: '/pages/admin/access-control/groups' },
                { title: t.get('menu.admin.features'), icon: 'sun-outline', link: '/pages/admin/access-control/features' },
            ],
        },
    ];
}
