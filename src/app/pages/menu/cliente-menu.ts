import { NbMenuItem } from '@nebular/theme';

export const CLIENTE_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/client/dashboard',
        home: true,
    },
    {
        title: 'Financeiro',
        icon: 'credit-card-outline',
        link: '/pages/client/financeiro',
    },
    {
        title: 'OPERAÇÃO',
        group: true,
    },
    {
        title: 'Todos os Pedidos',
        icon: 'file-text-outline',
        link: '/pages/client/pedidos',
    },
    {
        title: 'Pedidos Não Pagos',
        icon: 'alert-circle-outline',
        link: '/pages/client/pedidos-nao-pagos',
    },
    {
        title: 'Notas Fiscais',
        icon: 'file-outline',
        link: '/pages/client/notas-fiscais',
    },
    {
        title: 'Meus Produtos',
        icon: 'shopping-bag-outline',
        link: '/pages/client/meus-produtos',
    },
    {
        title: 'Publicar Catálogo',
        icon: 'book-open-outline',
        link: '/pages/client/publicar-catalogo',
    },
    {
        title: 'Pedido Manual',
        icon: 'edit-outline',
        link: '/pages/client/pedido-manual',
    },
    {
        title: 'Devoluções',
        icon: 'undo-outline',
        link: '/pages/client/devolucoes',
    },
    {
        title: 'Integrações',
        icon: 'globe-outline',
        link: '/pages/client/integracoes',
    },
    {
        title: 'ATENDIMENTO',
        group: true,
    },
    {
        title: 'Suporte',
        icon: 'message-circle-outline',
        link: '/pages/client/suporte',
    },
];
