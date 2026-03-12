import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../../@core/services/notification.service';
import { TranslationService } from '../../../../@core/services/translation.service';
import { AgGridTableComponent } from '../../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../../@core/mock/ag-grid-mock-data.service';
import { Produto } from '../../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class ProductsComponent implements OnInit {
  columnDefs: ColDef[] = [];
  formFields: FormFieldConfig[] = [];
  rowData: Produto[] = [];
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
      { field: 'name', headerName: this.t.get('columns.name'), flex: 1 },
      {
        field: 'price',
        headerName: this.t.get('columns.price'),
        width: 130,
        valueFormatter: (params: any) => {
          if (params.value != null) {
            return 'R$ ' + Number(params.value).toFixed(2).replace('.', ',');
          }
          return '';
        }
      },
      { field: 'quantity', headerName: this.t.get('columns.quantity'), width: 130 }
    ];

    this.formFields = [
      { name: 'name', label: this.t.get('columns.name'), type: 'text', required: true, minLength: 3, placeholder: this.t.get('forms.enterProductName') },
      { name: 'price', label: this.t.get('columns.price'), type: 'number', required: true, placeholder: this.t.get('forms.enterPrice') },
      { name: 'quantity', label: this.t.get('columns.quantity'), type: 'number', required: true, placeholder: this.t.get('forms.enterQuantity') },
    ];

    this.loadData();
  }

  loadData(): void {
    this.rowData = this.mockDataService.getProdutosData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addProduto(data);
    this.loadData();
    this.notification.successCreate();
  }

  onEditRow(event: { original: Produto; updated: any }): void {
    this.mockDataService.updateProduto(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate();
  }

  onDeleteSelected(selectedRows: Produto[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteProduto(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}
