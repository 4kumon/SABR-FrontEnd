import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CanaisFormDialogComponent } from './canais-form-dialog/canais-form-dialog.component';
import { CanaisDeleteDialogComponent } from './canais-delete-dialog/canais-delete-dialog.component';

export interface Canal {
  id: number;
  nome: string;
  tipo: string;
  status: string;
  dataCriacao: string;
}

@Component({
  selector: 'ngx-canais-list',
  templateUrl: './canais-list.component.html',
  styleUrls: ['./canais-list.component.scss'],
})
export class CanaisListComponent implements OnInit {
  private gridApi!: GridApi;

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, checkboxSelection: true },
    { field: 'nome', headerName: 'Nome', flex: 1, editable: true },
    { field: 'tipo', headerName: 'Tipo', width: 150, editable: true },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 120, 
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Ativo', 'Inativo'],
      },
    },
    { field: 'dataCriacao', headerName: 'Data de Criação', width: 180 },
    {
      headerName: 'Ações',
      width: 150,
      cellRenderer: (params: any) => {
        return `
          <button class="btn-edit" style="background: #3366ff; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px;">Editar</button>
          <button class="btn-delete" style="background: #ff3d00; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Excluir</button>
        `;
      },
      onCellClicked: (params: any) => {
        const target = params.event?.target || params.event.srcElement;
        if (target.classList.contains('btn-edit')) {
          this.onEditRow(params.data);
        } else if (target.classList.contains('btn-delete')) {
          this.onDeleteRow(params.data);
        }
      },
    },
  ];

  rowData: Canal[] = [];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  private storageKey = 'canais_data';

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.loadFromStorage();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  loadFromStorage(): void {
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      this.rowData = JSON.parse(storedData);
    } else {
      this.rowData = [
        { id: 1, nome: 'Canal WhatsApp Principal', tipo: 'WhatsApp', status: 'Ativo', dataCriacao: '2024-01-15' },
        { id: 2, nome: 'Canal Telegram Bot', tipo: 'Telegram', status: 'Ativo', dataCriacao: '2024-02-01' },
        { id: 3, nome: 'Canal E-mail Marketing', tipo: 'E-mail', status: 'Inativo', dataCriacao: '2024-02-10' },
        { id: 4, nome: 'Canal SMS', tipo: 'SMS', status: 'Ativo', dataCriacao: '2024-03-05' },
        { id: 5, nome: 'Canal Facebook Messenger', tipo: 'Messenger', status: 'Ativo', dataCriacao: '2024-03-20' },
      ];
      this.saveToStorage();
    }
  }

  saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.rowData));
  }

  onAddNew(): void {
    this.dialogService.open(CanaisFormDialogComponent, {
      context: {
        canal: null,
      },
    }).onClose.subscribe((result: Canal) => {
      if (result) {
        const newId = this.rowData.length > 0 ? Math.max(...this.rowData.map(c => c.id)) + 1 : 1;
        const newCanal: Canal = {
          ...result,
          id: newId,
          dataCriacao: new Date().toISOString().split('T')[0],
        };
        this.rowData = [...this.rowData, newCanal];
        this.saveToStorage();
        this.gridApi.setGridOption('rowData', this.rowData);
        this.toastrService.success('Canal criado com sucesso!', 'Sucesso');
      }
    });
  }

  onEditRow(canal: Canal): void {
    this.dialogService.open(CanaisFormDialogComponent, {
      context: {
        canal: canal,
      },
    }).onClose.subscribe((result: Canal) => {
      if (result) {
        const index = this.rowData.findIndex(c => c.id === canal.id);
        if (index !== -1) {
          this.rowData[index] = { ...result, id: canal.id, dataCriacao: canal.dataCriacao };
          this.rowData = [...this.rowData];
          this.saveToStorage();
          this.gridApi.setGridOption('rowData', this.rowData);
          this.toastrService.success('Canal atualizado com sucesso!', 'Sucesso');
        }
      }
    });
  }

  onDeleteRow(canal: Canal): void {
    this.dialogService.open(CanaisDeleteDialogComponent, {
      context: {
        canal: canal,
      },
    }).onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.rowData = this.rowData.filter(c => c.id !== canal.id);
        this.saveToStorage();
        this.gridApi.setGridOption('rowData', this.rowData);
        this.toastrService.success('Canal excluído com sucesso!', 'Sucesso');
      }
    });
  }

  onDeleteSelected(): void {
    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length === 0) {
      this.toastrService.warning('Selecione pelo menos um registro para excluir.', 'Aviso');
      return;
    }
    
    this.dialogService.open(CanaisDeleteDialogComponent, {
      context: {
        canal: selectedRows[0],
        isMultiple: selectedRows.length > 1,
      },
    }).onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        const selectedIds = selectedRows.map(row => row.id);
        this.rowData = this.rowData.filter(c => !selectedIds.includes(c.id));
        this.saveToStorage();
        this.gridApi.setGridOption('rowData', this.rowData);
        this.toastrService.success('Canais excluídos com sucesso!', 'Sucesso');
      }
    });
  }

  onCellValueChanged(event: any): void {
    const index = this.rowData.findIndex(c => c.id === event.data.id);
    if (index !== -1) {
      this.rowData[index] = { ...event.data };
      this.saveToStorage();
    }
  }

  exportToCSV(): void {
    this.gridApi.exportDataAsCsv({
      fileName: 'canais_export.csv',
      columnKeys: ['id', 'nome', 'tipo', 'status', 'dataCriacao'],
    });
  }
}