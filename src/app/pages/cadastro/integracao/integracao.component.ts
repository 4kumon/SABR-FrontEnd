import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../@core/services/notification.service';
import { AgGridTableComponent } from '../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Integracao, Canal, Cliente } from '../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-integracao',
  templateUrl: './integracao.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class IntegracaoComponent implements OnInit {
  // Dados auxiliares para traduzir ID → nome
  private canais: Canal[] = [];
  private clientes: Cliente[] = [];

  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 100,
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    {
      field: 'channel_id',
      headerName: 'Canal',
      width: 150,
      valueFormatter: (params: any) => {
        const canal = this.canais.find(c => c.id === params.value);
        return canal ? canal.id + ' - ' + canal.name : params.value;
      }
    },
    {
      field: 'client_id',
      headerName: 'Cliente',
      width: 150,
      valueFormatter: (params: any) => {
        const cliente = this.clientes.find(c => c.id === params.value);
        return cliente ? cliente.id + ' - ' + cliente.name : params.value;
      }
    },
    { field: 'store_name', headerName: 'Nome da Loja', width: 150 },
    { field: 'store_description', headerName: 'Descrição', width: 200 },
    { field: 'api_key', headerName: 'API Key', width: 170 },
    { field: 'client_key', headerName: 'Client Key', width: 150 },
    { field: 'client_secret', headerName: 'Client Secret', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
      cellRenderer: (params: any) => {
        if (params.value === true || params.value === 'Ativo') {
          return '<span class="status-tag success">Ativo</span>';
        }
        return '<span class="status-tag danger">Inativo</span>';
      }
    },
    { field: 'created_at', headerName: 'Criado em', width: 170 },
    { field: 'created_by', headerName: 'Criado por', width: 120 }
  ];

  formFields: FormFieldConfig[] = [
    {
      name: 'channel_id',
      label: 'Canal',
      type: 'select',
      required: true,
      placeholder: 'Selecione um canal',
      options: []   // preenchido no ngOnInit
    },
    {
      name: 'client_id',
      label: 'Cliente',
      type: 'select',
      required: true,
      placeholder: 'Selecione um cliente',
      options: []   // preenchido no ngOnInit
    },
    { name: 'store_name', label: 'Nome da Loja', type: 'text', required: true, minLength: 3, placeholder: 'Digite o nome da loja' },
    { name: 'store_description', label: 'Descrição', type: 'textarea', placeholder: 'Descreva a loja' },
    { name: 'api_key', label: 'API Key', type: 'password', placeholder: 'Chave da API' },
    { name: 'client_key', label: 'Client Key', type: 'password', placeholder: 'Chave do cliente' },
    { name: 'client_secret', label: 'Client Secret', type: 'password', placeholder: 'Segredo do cliente' },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: true,
      options: [
        { value: true, label: 'Ativo' },
        { value: false, label: 'Inativo' }
      ]
    },
  ];

  rowData: Integracao[] = [];

  localeText = {
    filterOoo: 'Filtro...',
    equals: 'Igual a',
    notEqual: 'Não igual a',
    contains: 'Contém',
    notContains: 'Não contém',
    startsWith: 'Começa com',
    endsWith: 'Termina com',
    blank: 'Vazio',
    notBlank: 'Não vazio',
    applyFilter: 'Aplicar',
    clearFilter: 'Limpar',
    filterMenuTitle: 'Filtro',
    searchOoo: 'Procurar...',
    and: 'E',
    or: 'OU',
    andAbbreviation: 'E',
    orAbbreviation: 'OU',
  };

  constructor(
    private mockDataService: AgGridMockDataService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    // Carregar dados auxiliares para dropdowns
    this.canais = this.mockDataService.getCanaisData();
    this.clientes = this.mockDataService.getClientesData();

    // Popular opções dos selects dinamicamente
    const canalField = this.formFields.find(f => f.name === 'channel_id');
    if (canalField) {
        canalField.options = this.canais.map(c => ({ value: c.id, label: c.id + ' - ' + c.name }));
    }

    const clienteField = this.formFields.find(f => f.name === 'client_id');
    if (clienteField) {
      clienteField.options = this.clientes.map(c => ({ value: c.id, label: c.id + ' - ' + c.name }));
    }

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