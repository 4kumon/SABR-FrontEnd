import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../../@core/services/notification.service';
import { TranslationService } from '../../../../@core/services/translation.service';
import { AgGridTableComponent } from '../../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../../@core/mock/ag-grid-mock-data.service';
import { Usuario } from '../../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class UsersComponent implements OnInit {
  columnDefs: ColDef[] = [];
  formFields: FormFieldConfig[] = [];
  rowData: Usuario[] = [];
  localeText: any = {};

  constructor(
    private mockDataService: AgGridMockDataService,
    private notification: NotificationService,
    private t: TranslationService,
  ) {}

  ngOnInit(): void {
    this.localeText = this.t.section('grid');

    this.columnDefs = [
      {
        field: 'id',
        headerName: this.t.get('columns.id'),
        width: 90,
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      { field: 'name', headerName: this.t.get('columns.name'), width: 150 },
      { field: 'person_type', headerName: this.t.get('columns.personType'), width: 130 },
      { field: 'document', headerName: this.t.get('columns.document'), width: 180 },
      { field: 'email', headerName: this.t.get('columns.email'), width: 200 },
      { field: 'whatsapp', headerName: this.t.get('columns.whatsapp'), width: 140 },
      { field: 'address_zip', headerName: this.t.get('columns.zipCode'), width: 110 },
      { field: 'address_city', headerName: this.t.get('columns.city'), width: 150 },
      { field: 'address_state', headerName: this.t.get('columns.state'), width: 80 },
      {
        field: 'profile',
        headerName: this.t.get('columns.profile'),
        width: 120,
        cellRenderer: (params: any) => {
          if (params.value === 'interno') {
            return `<span class="status-tag gray">${this.t.get('status.internal')}</span>`;
          }
          return `<span class="status-tag info">${this.t.get('status.client')}</span>`;
        }
      },
      {
        field: 'status',
        headerName: this.t.get('columns.status'),
        width: 110,
        cellRenderer: (params: any) => {
          if (params.value === true) {
            return `<span class="status-tag success">${this.t.get('status.active')}</span>`;
          }
          return `<span class="status-tag danger">${this.t.get('status.inactive')}</span>`;
        }
      },
      {
        field: 'current_balance',
        headerName: this.t.get('columns.balance'),
        width: 110,
        valueFormatter: (params: any) => {
          return 'R$ ' + (params.value || 0).toFixed(2);
        }
      },
      {
        field: 'is_blocked',
        headerName: this.t.get('columns.blocked'),
        width: 120,
        cellRenderer: (params: any) => {
          if (params.value === true) {
            return `<span class="status-tag danger">${this.t.get('status.yes')}</span>`;
          }
          return `<span class="status-tag success">${this.t.get('status.no')}</span>`;
        }
      },
    ];

    this.formFields = [
      { name: 'name', label: this.t.get('columns.name'), type: 'text', required: true, minLength: 3, placeholder: this.t.get('forms.userName') },
      { name: 'store_name', label: this.t.get('columns.storeName'), type: 'text', placeholder: this.t.get('forms.storeNameForClients') },
      {
        name: 'person_type',
        label: this.t.get('forms.personTypeLabel'),
        type: 'select',
        required: true,
        defaultValue: 'PF',
        options: [
          { value: 'PF', label: this.t.get('personType.individual') },
          { value: 'PJ', label: this.t.get('personType.company') }
        ],
        halfWidth: true
      },
      { name: 'document', label: this.t.get('forms.documentLabel'), type: 'text', required: true, placeholder: this.t.get('forms.documentPlaceholder'), halfWidth: true },
      {
        name: 'ie_exempt',
        label: this.t.get('forms.ieExemptLabel'),
        type: 'select',
        defaultValue: false,
        options: [
          { value: false, label: this.t.get('status.notExempt') },
          { value: true, label: this.t.get('status.exempt') }
        ],
        halfWidth: true
      },
      { name: 'ie', label: this.t.get('forms.ieLabel'), type: 'text', placeholder: this.t.get('forms.iePlaceholder'), halfWidth: true },
      { name: 'email', label: this.t.get('columns.email'), type: 'text', required: true, placeholder: this.t.get('columns.email'), halfWidth: true },
      { name: 'whatsapp', label: this.t.get('columns.whatsapp'), type: 'text', placeholder: this.t.get('forms.whatsappPlaceholder'), halfWidth: true },
      { name: 'address_zip', label: this.t.get('columns.zipCode'), type: 'text', placeholder: this.t.get('columns.zipCode'), halfWidth: true },
      { name: 'address_street', label: this.t.get('forms.address'), type: 'text', placeholder: this.t.get('forms.addressPlaceholder') },
      { name: 'address_number', label: this.t.get('forms.numberLabel'), type: 'number', placeholder: this.t.get('forms.numberPlaceholder'), halfWidth: true },
      { name: 'address_complement', label: this.t.get('forms.complement'), type: 'text', placeholder: this.t.get('forms.complementPlaceholder'), halfWidth: true },
      { name: 'address_neighborhood', label: this.t.get('forms.neighborhood'), type: 'text', placeholder: this.t.get('forms.neighborhood'), halfWidth: true },
      { name: 'address_city', label: this.t.get('forms.cityLabel'), type: 'text', placeholder: this.t.get('forms.cityLabel'), halfWidth: true },
      { name: 'address_state', label: this.t.get('forms.stateLabel'), type: 'text', placeholder: this.t.get('forms.statePlaceholder'), halfWidth: true },
      { name: 'password', label: this.t.get('forms.password'), type: 'password', placeholder: this.t.get('forms.password'), halfWidth: true },
      {
        name: 'profile',
        label: this.t.get('columns.profile'),
        type: 'select',
        required: true,
        defaultValue: 'cliente',
        options: [
          { value: 'interno', label: this.t.get('status.internal') },
          { value: 'cliente', label: this.t.get('status.client') }
        ],
        halfWidth: true
      },
      {
        name: 'status',
        label: this.t.get('columns.status'),
        type: 'select',
        required: true,
        defaultValue: true,
        options: [
          { value: true, label: this.t.get('status.active') },
          { value: false, label: this.t.get('status.inactive') }
        ],
        halfWidth: true
      },
      {
        name: 'is_blocked',
        label: this.t.get('columns.blocked'),
        type: 'select',
        defaultValue: false,
        options: [
          { value: false, label: this.t.get('status.notBlocked') },
          { value: true, label: this.t.get('status.blocked') }
        ],
        halfWidth: true
      },
    ];

    this.loadData();
  }

  loadData(): void {
    this.rowData = this.mockDataService.getUsuariosData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addUsuario(data);
    this.loadData();
    this.notification.successCreate();
  }

  onEditRow(event: { original: Usuario; updated: any }): void {
    this.mockDataService.updateUsuario(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate();
  }

  onDeleteSelected(selectedRows: Usuario[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteUsuario(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}
