import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { AgGridTableComponent } from '../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../@core/mock/ag-grid-mock-data.service';
import { NotificationService } from '../../@core/services/notification.service';
import { Pedido } from '../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../@core/models/form-field.models';

@Component({
    selector: 'ngx-pedidos',
    standalone: true,
    imports: [CommonModule, FormsModule, NbCardModule, NbSelectModule, AgGridTableComponent],
    templateUrl: './pedidos.component.html',
})
export class PedidosComponent implements OnInit {
    statusFilter: string = 'todos';

    columnDefs: ColDef[] = [
        { field: 'id', headerName: 'Id', width: 80, checkboxSelection: true, headerCheckboxSelection: true },
        { field: 'order_number', headerName: 'Nº Pedido', width: 130 },
        { field: 'client_name', headerName: 'Cliente', flex: 1 },
        { field: 'channel', headerName: 'Canal', width: 150 },
        {
            field: 'status', headerName: 'Status', width: 130,
            cellStyle: (params: any) => {
                if (params.value === 'pago') return { color: '#00d68f', fontWeight: 'bold' };
                if (params.value === 'cancelado') return { color: '#ff3d71', fontWeight: 'bold' };
                return { color: '#ffaa00', fontWeight: 'bold' };
            },
            valueFormatter: (params: any) => {
                const map: Record<string, string> = { pago: 'Pago', cancelado: 'Cancelado', pendente: 'Pendente' };
                return map[params.value] || params.value;
            },
        },
        {
            field: 'total', headerName: 'Valor Total', width: 150,
            valueFormatter: (params: any) => {
                return params.value != null
                    ? params.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    : '';
            },
        },
        { field: 'created_at', headerName: 'Data', width: 180 },
    ];

    formFields: FormFieldConfig[] = [
        { name: 'order_number', label: 'Nº Pedido', type: 'text', required: true, placeholder: 'PED-000' },
        { name: 'client_name', label: 'Cliente', type: 'text', required: true, placeholder: 'Nome do cliente' },
        { name: 'channel', label: 'Canal', type: 'text', required: true, placeholder: 'Ex: Shopee' },
        { name: 'status', label: 'Status', type: 'text', required: true, placeholder: 'pago / cancelado / pendente' },
        { name: 'total', label: 'Valor Total', type: 'number', required: true, placeholder: '0.00' },
    ];

    allPedidos: Pedido[] = [];
    rowData: Pedido[] = [];

    localeText = {
        filterOoo: 'Filtro...', equals: 'Igual a', notEqual: 'Não igual a',
        contains: 'Contém', notContains: 'Não contém', startsWith: 'Começa com',
        endsWith: 'Termina com', blank: 'Vazio', notBlank: 'Não vazio',
        applyFilter: 'Aplicar', clearFilter: 'Limpar', filterMenuTitle: 'Filtro',
        searchOoo: 'Procurar...', and: 'E', or: 'OU', andAbbreviation: 'E', orAbbreviation: 'OU',
    };

    constructor(
        private mockDataService: AgGridMockDataService,
        private notification: NotificationService,
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        this.allPedidos = this.mockDataService.getPedidosData();
        this.applyFilter();
    }

    onFilterChange(value: string): void {
        this.statusFilter = value;
        this.applyFilter();
    }

    applyFilter(): void {
        if (this.statusFilter === 'todos') {
            this.rowData = [...this.allPedidos];
        } else {
            this.rowData = this.allPedidos.filter(p => p.status === this.statusFilter);
        }
    }

    onAddNew(data: any): void {
        this.mockDataService.addPedido(data);
        this.loadData();
        this.notification.successCreate();
    }

    onEditRow(event: { original: Pedido; updated: any }): void {
        this.mockDataService.updatePedido(event.original.id, event.updated);
        this.loadData();
        this.notification.successUpdate();
    }

    onDeleteSelected(selectedRows: Pedido[]): void {
        selectedRows.forEach(row => this.mockDataService.deletePedido(row.id));
        this.loadData();
        this.notification.successDelete(selectedRows.length);
    }
}
