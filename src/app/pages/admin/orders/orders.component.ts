import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { AgGridTableComponent } from '../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { NotificationService } from '../../../@core/services/notification.service';
import { TranslationService } from '../../../@core/services/translation.service';
import { TranslatePipe } from '../../../@core/pipes/translate.pipe';
import { Pedido } from '../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
    selector: 'ngx-orders',
    standalone: true,
    imports: [CommonModule, FormsModule, NbCardModule, NbSelectModule, AgGridTableComponent, TranslatePipe],
    templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
    statusFilter: string = 'todos';

    columnDefs: ColDef[] = [];
    formFields: FormFieldConfig[] = [];
    allPedidos: Pedido[] = [];
    rowData: Pedido[] = [];
    localeText: any = {};

    constructor(
        private mockDataService: AgGridMockDataService,
        private notification: NotificationService,
        private t: TranslationService,
    ) {}

    ngOnInit(): void {
        this.localeText = this.t.section('grid');

        this.columnDefs = [
            { field: 'id', headerName: this.t.get('columns.id'), width: 80, checkboxSelection: true, headerCheckboxSelection: true },
            { field: 'order_number', headerName: this.t.get('columns.orderNumber'), width: 130 },
            { field: 'client_name', headerName: this.t.get('columns.client'), flex: 1 },
            { field: 'channel', headerName: this.t.get('columns.channel'), width: 150 },
            {
                field: 'status', headerName: this.t.get('columns.status'), width: 130,
                cellStyle: (params: any) => {
                    if (params.value === 'pago') return { color: '#00d68f', fontWeight: 'bold' };
                    if (params.value === 'cancelado') return { color: '#ff3d71', fontWeight: 'bold' };
                    return { color: '#ffaa00', fontWeight: 'bold' };
                },
                valueFormatter: (params: any) => {
                    const map: Record<string, string> = {
                        pago: this.t.get('status.paid'),
                        cancelado: this.t.get('status.cancelled'),
                        pendente: this.t.get('status.pending'),
                    };
                    return map[params.value] || params.value;
                },
            },
            {
                field: 'total', headerName: this.t.get('columns.totalValue'), width: 150,
                valueFormatter: (params: any) => {
                    return params.value != null
                        ? params.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : '';
                },
            },
            { field: 'created_at', headerName: this.t.get('columns.date'), width: 180 },
        ];

        this.formFields = [
            { name: 'order_number', label: this.t.get('columns.orderNumber'), type: 'text', required: true, placeholder: this.t.get('forms.orderNumberPlaceholder') },
            { name: 'client_name', label: this.t.get('columns.client'), type: 'text', required: true, placeholder: this.t.get('forms.clientNamePlaceholder') },
            { name: 'channel', label: this.t.get('columns.channel'), type: 'text', required: true, placeholder: this.t.get('forms.channelPlaceholder') },
            { name: 'status', label: this.t.get('columns.status'), type: 'text', required: true, placeholder: this.t.get('forms.statusPlaceholder') },
            { name: 'total', label: this.t.get('columns.totalValue'), type: 'number', required: true, placeholder: '0.00' },
        ];

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
