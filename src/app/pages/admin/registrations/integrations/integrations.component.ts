import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../../@core/services/notification.service';
import { TranslationService } from '../../../../@core/services/translation.service';
import { AgGridTableComponent } from '../../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../../@core/mock/ag-grid-mock-data.service';
import { Integracao, Canal, Cliente } from '../../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class IntegrationsComponent implements OnInit {
  private canais: Canal[] = [];
  private clientes: Cliente[] = [];

  columnDefs: ColDef[] = [];
  formFields: FormFieldConfig[] = [];
  rowData: Integracao[] = [];
  localeText: any = {};

  constructor(
    private mockDataService: AgGridMockDataService,
    private notification: NotificationService,
    private t: TranslationService,
  ) {}

  ngOnInit(): void {
    this.localeText = this.t.section('grid');
    this.canais = this.mockDataService.getCanaisData();
    this.clientes = this.mockDataService.getClientesData();

    this.columnDefs = [
      {
        field: 'id',
        headerName: this.t.get('columns.id'),
        width: 100,
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      {
        field: 'channel_id',
        headerName: this.t.get('columns.channel'),
        width: 150,
        valueFormatter: (params: any) => {
          const canal = this.canais.find(c => c.id === params.value);
          return canal ? canal.id + ' - ' + canal.name : params.value;
        }
      },
      {
        field: 'client_id',
        headerName: this.t.get('columns.client'),
        width: 150,
        valueFormatter: (params: any) => {
          const cliente = this.clientes.find(c => c.id === params.value);
          return cliente ? cliente.id + ' - ' + cliente.name : params.value;
        }
      },
      { field: 'store_name', headerName: this.t.get('columns.storeName'), width: 150 },
      { field: 'store_description', headerName: this.t.get('columns.description'), width: 200 },
      { field: 'api_key', headerName: this.t.get('columns.apiKey'), width: 170 },
      { field: 'client_key', headerName: this.t.get('columns.clientKey'), width: 150 },
      { field: 'client_secret', headerName: this.t.get('columns.clientSecret'), width: 130 },
      {
        field: 'status',
        headerName: this.t.get('columns.status'),
        width: 90,
        cellRenderer: (params: any) => {
          if (params.value === true || params.value === 'Ativo') {
            return `<span class="status-tag success">${this.t.get('status.active')}</span>`;
          }
          return `<span class="status-tag danger">${this.t.get('status.inactive')}</span>`;
        }
      },
      { field: 'created_at', headerName: this.t.get('columns.createdAt'), width: 170 },
      { field: 'created_by', headerName: this.t.get('columns.createdBy'), width: 120 }
    ];

    this.formFields = [
      {
        name: 'channel_id',
        label: this.t.get('columns.channel'),
        type: 'select',
        required: true,
        placeholder: this.t.get('forms.selectChannel'),
        options: this.canais.map(c => ({ value: c.id, label: c.id + ' - ' + c.name }))
      },
      {
        name: 'client_id',
        label: this.t.get('columns.client'),
        type: 'select',
        required: true,
        placeholder: this.t.get('forms.selectClient'),
        options: this.clientes.map(c => ({ value: c.id, label: c.id + ' - ' + c.name }))
      },
      { name: 'store_name', label: this.t.get('columns.storeName'), type: 'text', required: true, minLength: 3, placeholder: this.t.get('forms.enterStoreName') },
      { name: 'store_description', label: this.t.get('columns.description'), type: 'textarea', placeholder: this.t.get('forms.describeStore') },
      { name: 'api_key', label: this.t.get('columns.apiKey'), type: 'password', placeholder: this.t.get('forms.apiKeyPlaceholder') },
      { name: 'client_key', label: this.t.get('columns.clientKey'), type: 'password', placeholder: this.t.get('forms.clientKeyPlaceholder') },
      { name: 'client_secret', label: this.t.get('columns.clientSecret'), type: 'password', placeholder: this.t.get('forms.clientSecretPlaceholder') },
      {
        name: 'status',
        label: this.t.get('columns.status'),
        type: 'select',
        required: true,
        defaultValue: true,
        options: [
          { value: true, label: this.t.get('status.active') },
          { value: false, label: this.t.get('status.inactive') }
        ]
      },
    ];

    this.loadData();
  }

  loadData(): void {
    this.rowData = this.mockDataService.getIntegracoesData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addIntegracao(data);
    this.loadData();
    this.notification.successCreate();
  }

  onEditRow(event: { original: Integracao; updated: any }): void {
    this.mockDataService.updateIntegracao(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate();
  }

  onDeleteSelected(selectedRows: Integracao[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteIntegracao(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}
