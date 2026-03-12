import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../@core/services/notification.service';
import { AgGridTableComponent } from '../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Produto } from '../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-produto',
  templateUrl: './produto.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class ProdutoComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 90,
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { field: 'name', headerName: 'Nome', flex: 1 },
    {
      field: 'price',
      headerName: 'Preço',
      width: 130,
      valueFormatter: (params: any) => {
        if (params.value != null) {
          return 'R$ ' + Number(params.value).toFixed(2).replace('.', ',');
        }
        return '';
      }
    },
    { field: 'quantity', headerName: 'Quantidade', width: 130 }
  ];

  formFields: FormFieldConfig[] = [
    { name: 'name', label: 'Nome', type: 'text', required: true, minLength: 3, placeholder: 'Digite o nome do produto' },
    { name: 'price', label: 'Preço', type: 'number', required: true, placeholder: 'Digite o preço' },
    { name: 'quantity', label: 'Quantidade', type: 'number', required: true, placeholder: 'Digite a quantidade' },
  ];

  rowData: Produto[] = [];

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
