import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
        home: true,
    },
    {
        title: 'Cadastros',
        icon: 'edit-2-outline',
        children: [
            {
                title: 'Canais',
                icon: 'radio-outline',
                link: '/pages/cadastro/canais',
            },
            {
                title: 'Clientes',
                icon: 'people-outline',
                link: '/pages/cadastro/cliente',
            },
            {
                title: 'Integrações',
                icon: 'globe-outline',
                link: '/pages/cadastro/integracao',
            },
            {
                title: 'Produtos',
                icon: 'shopping-bag-outline',
                link: '/pages/cadastro/produto',
            },
            {
                title: 'Usuários',
                icon: 'person-outline',
                link: '/pages/cadastro/usuario',
            },
        ],
    },
    {
        title: 'Financeiro',
        icon: 'credit-card-outline',
        children: [
            {
                title: 'Solicitações de Recarga',
                icon: 'pantone-outline',
                link: '/pages/financeiro/solicitacoes-recarga',
            },
        ],
    },
    {
        title: 'Pedidos',
        icon: 'file-text-outline',
        children: [
            {
                title: 'Integrado',
                icon: 'cast-outline',
                link: '/pages/pedidos/integrado',
            },
        ],
    },
    {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
    },
    {
        title: 'Direito de Acesso',
        icon: 'eye-outline',
        children: [
            {
                title: 'Grupos',
                icon: 'pie-chart-outline',
                link: '/pages/direito-acesso/grupos',
            },
            {
                title: 'Funcionalidades',
                icon: 'sun-outline',
                link: '/pages/direito-acesso/funcionalidades',
            },
        ],
    },
];
