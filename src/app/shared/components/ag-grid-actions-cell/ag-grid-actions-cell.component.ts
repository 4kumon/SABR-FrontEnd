import { Component, Input } from '@angular/core';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-ag-grid-actions-cell',
  template: `
    <div class="actions-container">
      <button nbButton status="primary" size="small" (click)="handleEdit()" title="Editar">
        <nb-icon icon="edit-outline"></nb-icon>
      </button>
      <button nbButton status="danger" size="small" (click)="handleDelete()" title="Excluir">
        <nb-icon icon="trash-2-outline"></nb-icon>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .actions-container {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  `],
  standalone: true,
  imports: [NbIconModule, NbButtonModule],
})
export class AgGridActionsCellComponent {
  @Input() editCallback: (data: any) => void = () => {};
  @Input() deleteCallback: (data: any) => void = () => {};

  rowData: any;

  agInit(params: any): void {
    this.rowData = params.data;
    if (params.editCallback) {
      this.editCallback = params.editCallback;
    }
    if (params.deleteCallback) {
      this.deleteCallback = params.deleteCallback;
    }
  }

  handleEdit() {
    if (this.editCallback) {
      this.editCallback(this.rowData);
    }
  }

  handleDelete() {
    if (this.deleteCallback) {
      this.deleteCallback(this.rowData);
    }
  }
}