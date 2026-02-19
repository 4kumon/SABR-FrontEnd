import { Component, EventEmitter, Output } from '@angular/core';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-actions-cell',
  template: `
    <div style="display: flex; gap: 8px; justify-content: center;">
      <button nbButton status="primary" size="small" (click)="onEdit()" title="Editar">
        <nb-icon icon="edit-outline"></nb-icon>
      </button>
      <button nbButton status="danger" size="small" (click)="onDelete()" title="Excluir">
        <nb-icon icon="trash-2-outline"></nb-icon>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  standalone: true,
  imports: [NbIconModule, NbButtonModule],
})
export class ActionsCellComponent {
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  // Propriedade que será preenchida pelo ng2-smart-table
  rowData: any;

  onEdit() {
    this.edit.emit(this.rowData);
  }

  onDelete() {
    this.delete.emit(this.rowData);
  }
}