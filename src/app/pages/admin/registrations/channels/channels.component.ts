import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { NotificationService } from '../../../../@core/services/notification.service';
import { TranslationService } from '../../../../@core/services/translation.service';
import { AgGridTableComponent } from '../../../../shared/components/ag-grid-table/ag-grid-table.component';
import { AgGridMockDataService } from '../../../../@core/mock/ag-grid-mock-data.service';
import { Canal } from '../../../../@core/models/ag-grid.models';
import { FormFieldConfig } from '../../../../@core/models/form-field.models';

@Component({
  selector: 'ngx-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridTableComponent]
})
export class ChannelsComponent implements OnInit {
  columnDefs: ColDef[] = [];
  formFields: FormFieldConfig[] = [];
  rowData: Canal[] = [];
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
      { field: 'type', headerName: this.t.get('columns.type'), width: 120 },
      { field: 'name', headerName: this.t.get('columns.name'), flex: 1 },
      { field: 'shortened_name', headerName: this.t.get('columns.shortenedName'), width: 170 },
      {
        field: 'image_link',
        headerName: this.t.get('columns.image'),
        width: 120,
        cellRenderer: (params: any) => {
          if (params.value) {
            return `<img src="${params.value}" alt="Logo" class="grid-logo" onerror="this.style.display='none'">`;
          }
          return '';
        }
      },
      { field: 'created_at', headerName: this.t.get('columns.createdAt'), width: 180 },
      { field: 'created_by', headerName: this.t.get('columns.createdBy'), width: 130 }
    ];

    this.formFields = [
      { name: 'type', label: this.t.get('columns.type'), type: 'text', required: true, placeholder: this.t.get('forms.enterType') },
      { name: 'name', label: this.t.get('columns.name'), type: 'text', required: true, minLength: 3, placeholder: this.t.get('forms.enterName') },
      { name: 'shortened_name', label: this.t.get('columns.shortenedName'), type: 'text', placeholder: this.t.get('forms.enterShortenedName') },
      { name: 'image_link', label: this.t.get('forms.imageLabel'), type: 'text', placeholder: this.t.get('forms.imageUrl') },
    ];

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
