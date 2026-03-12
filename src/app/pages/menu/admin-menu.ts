import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/admin/dashboard',
        home: true,
    },
    {
        title: 'Perfil',
        icon: 'person-outline',
        link: '/pages/admin/perfil',
    },
    {
        title: 'Cadastros',
        icon: 'edit-2-outline',
        children: [
            { title: 'Canais', icon: 'radio-outline', link: '/pages/admin/cadastro/canais' },
            { title: 'Clientes', icon: 'people-outline', link: '/pages/admin/cadastro/cliente' },
            { title: 'Integrações', icon: 'globe-outline', link: '/pages/admin/cadastro/integracao' },
            { title: 'Produtos', icon: 'shopping-bag-outline', link: '/pages/admin/cadastro/produto' },
            { title: 'Usuários', icon: 'person-outline', link: '/pages/admin/cadastro/usuario' },
        ],
    },
    {
        title: 'Financeiro',
        icon: 'credit-card-outline',
        children: [
            { title: 'Solicitações de Recarga', icon: 'pantone-outline', link: '/pages/admin/financeiro/solicitacoes-recarga' },
        ],
    },
    {
        title: 'Pedidos',
        icon: 'file-text-outline',
        link: '/pages/admin/pedidos',
    },
    {
        title: 'Direito de Acesso',
        icon: 'eye-outline',
        children: [
            { title: 'Grupos', icon: 'pie-chart-outline', link: '/pages/admin/direito-acesso/grupos' },
            { title: 'Funcionalidades', icon: 'sun-outline', link: '/pages/admin/direito-acesso/funcionalidades' },
        ],
    },
];
