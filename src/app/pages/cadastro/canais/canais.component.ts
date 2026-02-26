import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../@core/services/notification.service';
import { AgGridTableComponent } from '../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Canal } from '../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-canais',
  templateUrl: './canais.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class CanaisComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 90,
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    { field: 'type', headerName: 'Tipo', width: 120 },
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'shortened_name', headerName: 'Nome Encurtado', width: 170 },
    {
        field: 'image_link',
        headerName: 'Imagem',
        width: 120,
        cellRenderer: (params: any) => {
            if (params.value) {
            return `<img src="${params.value}" alt="Logo" class="grid-logo" onerror="this.style.display='none'">`;
            }
            return '';
        }
    },
    { field: 'created_at', headerName: 'Criado em', width: 180 },
    { field: 'created_by', headerName: 'Criado por', width: 130 }
  ];

  formFields: FormFieldConfig[] = [
    { name: 'type', label: 'Tipo', type: 'text', required: true, placeholder: 'Digite o tipo' },
    { name: 'name', label: 'Nome', type: 'text', required: true, minLength: 3, placeholder: 'Digite o nome' },
    { name: 'shortened_name', label: 'Nome Encurtado', type: 'text', placeholder: 'Digite o nome encurtado' },
    { name: 'image_link', label: 'Link da Imagem', type: 'text', placeholder: 'URL da imagem' },
  ];

  rowData: Canal[] = [];

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
    this.rowData = this.mockDataService.getCanaisData();
  }

  onAddNew(data: any): void {
    this.mockDataService.addCanal(data);
    this.loadData();
    this.notification.successCreate();
  }

  onEditRow(event: { original: Canal; updated: any }): void {
    this.mockDataService.updateCanal(event.original.id, event.updated);
    this.loadData();
    this.notification.successUpdate();
  }

  onDeleteSelected(selectedRows: Canal[]): void {
    selectedRows.forEach(row => this.mockDataService.deleteCanal(row.id));
    this.loadData();
    this.notification.successDelete(selectedRows.length);
  }
}