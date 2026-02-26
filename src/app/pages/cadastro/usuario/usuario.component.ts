import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../@core/services/notification.service';
import { AgGridTableComponent } from '../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Usuario } from '../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class UsuarioComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 90,
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { field: 'name', headerName: 'Nome', width: 150 },
    { field: 'person_type', headerName: 'Tipo Pessoa', width: 130 },
    { field: 'document', headerName: 'Documento', width: 180 },
    { field: 'email', headerName: 'E-mail', width: 200 },
    { field: 'whatsapp', headerName: 'WhatsApp', width: 140 },
    { field: 'address_zip', headerName: 'CEP', width: 110 },
    { field: 'address_city', headerName: 'Cidade', width: 150 },
    { field: 'address_state', headerName: 'UF', width: 80 },
    {
      field: 'profile',
      headerName: 'Perfil',
      width: 120,
      cellRenderer: (params: any) => {
        if (params.value === 'interno') {
          return '<span class="status-tag gray">Interno</span>';
        }
        return '<span class="status-tag info">Cliente</span>';
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      cellRenderer: (params: any) => {
        if (params.value === true) {
          return '<span class="status-tag success">Ativo</span>';
        }
        return '<span class="status-tag danger">Inativo</span>';
      }
    },
    {
      field: 'current_balance',
      headerName: 'Saldo',
      width: 110,
      valueFormatter: (params: any) => {
        return 'R$ ' + (params.value || 0).toFixed(2);
      }
    },
    {
      field: 'is_blocked',
      headerName: 'Bloqueado',
      width: 120,
      cellRenderer: (params: any) => {
        if (params.value === true) {
          return '<span class="status-tag danger">Sim</span>';
        }
        return '<span class="status-tag success">Não</span>';
      }
    },
  ];

  formFields: FormFieldConfig[] = [
    { name: 'name', label: 'Nome', type: 'text', required: true, minLength: 3, placeholder: 'Nome do usuário' },
    { name: 'store_name', label: 'Nome da Loja', type: 'text', placeholder: 'Nome da loja (para clientes)' },
    {
    name: 'person_type',
    label: 'Tipo de Pessoa',
    type: 'select',
    required: true,
    defaultValue: 'PF',
    options: [
        { value: 'PF', label: 'PF - Pessoa Física' },
        { value: 'PJ', label: 'PJ - Pessoa Jurídica' }
    ],
    halfWidth: true
    },
    { name: 'document', label: 'Documento (CPF/CNPJ)', type: 'text', required: true, placeholder: 'CPF ou CNPJ', halfWidth: true },
    {
      name: 'ie_exempt',
      label: 'IE Isenta',
      type: 'select',
      defaultValue: false,
      options: [
        { value: false, label: 'Não Isenta' },
        { value: true, label: 'Isenta' }
      ],
      halfWidth: true
    },
    { name: 'ie', label: 'Inscrição Estadual', type: 'text', placeholder: 'Número da IE', halfWidth: true },
    { name: 'email', label: 'E-mail', type: 'text', required: true, placeholder: 'E-mail', halfWidth: true },
    { name: 'whatsapp', label: 'WhatsApp', type: 'text', placeholder: 'Número de WhatsApp', halfWidth: true },
    { name: 'address_zip', label: 'CEP', type: 'text', placeholder: 'CEP', halfWidth: true },
    { name: 'address_street', label: 'Endereço', type: 'text', placeholder: 'Rua/Avenida' },
    { name: 'address_number', label: 'Número', type: 'number', placeholder: 'Nº', halfWidth: true },
    { name: 'address_complement', label: 'Complemento', type: 'text', placeholder: 'Apto, Sala...', halfWidth: true },
    { name: 'address_neighborhood', label: 'Bairro', type: 'text', placeholder: 'Bairro', halfWidth: true },
    { name: 'address_city', label: 'Cidade', type: 'text', placeholder: 'Cidade', halfWidth: true },
    { name: 'address_state', label: 'Estado', type: 'text', placeholder: 'UF', halfWidth: true },
    { name: 'password', label: 'Senha', type: 'password', placeholder: 'Senha', halfWidth: true },
    {
      name: 'profile',
      label: 'Perfil',
      type: 'select',
      required: true,
      defaultValue: 'cliente',
      options: [
        { value: 'interno', label: 'Interno' },
        { value: 'cliente', label: 'Cliente' }
      ],
      halfWidth: true
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: true,
      options: [
        { value: true, label: 'Ativo' },
        { value: false, label: 'Inativo' }
      ],
      halfWidth: true
    },
    {
      name: 'is_blocked',
      label: 'Bloqueado',
      type: 'select',
      defaultValue: false,
      options: [
        { value: false, label: 'Não Bloqueado' },
        { value: true, label: 'Bloqueado' }
      ],
      halfWidth: true
    },
  ];

  rowData: Usuario[] = [];

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
    this.loadData();
  }

  loadData(): void {
    this.rowData = this.mockDataService.getUsuariosData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addUsuario(data);
    this.loadData();
    this.notification.successCreate()
  }

  onEditRow(event: { original: Usuario; updated: any }): void {
    this.mockDataService.updateUsuario(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate()
  }

  onDeleteSelected(selectedRows: Usuario[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteUsuario(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}