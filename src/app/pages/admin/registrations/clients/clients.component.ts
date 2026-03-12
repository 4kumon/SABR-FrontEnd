import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../../@core/services/notification.service';
import { TranslationService } from '../../../../@core/services/translation.service';
import { AgGridTableComponent } from '../../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../../@core/mock/ag-grid-mock-data.service';
import { Cliente } from '../../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class ClientsComponent implements OnInit {
  columnDefs: ColDef[] = [];
  formFields: FormFieldConfig[] = [];
  rowData: Cliente[] = [];
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
        width: 70,
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      { field: 'name', headerName: this.t.get('columns.name'), flex: 1 },
      { field: 'storeName', headerName: this.t.get('columns.storeName'), width: 170 },
      { field: 'email', headerName: this.t.get('columns.email'), width: 250 },
      { field: 'whatsapp', headerName: this.t.get('columns.whatsapp'), width: 150 },
      { field: 'currentBalance', headerName: this.t.get('columns.balance'), width: 120 },
    ];

    this.formFields = [
      { name: 'name', label: this.t.get('columns.name'), type: 'text', required: true, minLength: 3, placeholder: this.t.get('forms.enterName') },
      { name: 'storeName', label: this.t.get('columns.storeName'), type: 'text', placeholder: this.t.get('forms.enterStoreName') },
      { name: 'email', label: this.t.get('columns.email'), type: 'text', placeholder: this.t.get('forms.enterEmail') },
      { name: 'whatsapp', label: this.t.get('columns.whatsapp'), type: 'text', placeholder: this.t.get('forms.enterWhatsapp') },
    ];

    this.loadData();
  }

  loadData(): void {
    this.rowData = this.mockDataService.getClientesData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addCliente({ ...data, currentBalance: '0.00' });
    this.loadData();
    this.notification.successCreate();
  }

  onEditRow(event: { original: Cliente; updated: any }): void {
    this.mockDataService.updateCliente(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate();
  }

  onDeleteSelected(selectedRows: Cliente[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteCliente(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}
