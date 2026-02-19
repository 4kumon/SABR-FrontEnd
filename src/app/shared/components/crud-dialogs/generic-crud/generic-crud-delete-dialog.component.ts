import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogRef, NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-generic-crud-delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule
  ],
  template: `
    <nb-card>
      <nb-card-header>
        Confirmar exclusão
        <button nbButton ghost status="danger" size="medium" (click)="cancelar()" 
                style="float: right; margin-top: -5px;" type="button" tabindex="-1">
          <nb-icon icon="close-outline"></nb-icon>
        </button>
      </nb-card-header>

      <nb-card-body>
        <div style="text-align: center;">
          <nb-icon icon="alert-triangle-outline" status="warning" size="large"></nb-icon>
          <p style="margin-top: 16px; font-size: 16px;">
            Tem certeza que deseja excluir o registro<br/>
            <strong>{{ itemName }}</strong>?
          </p>
          <p style="color: #ff3d71; font-size: 14px;">Esta ação não pode ser desfeita.</p>
        </div>
      </nb-card-body>

      <nb-card-footer style="display: flex; justify-content: center; gap: 16px;">
        <button nbButton status="basic" (click)="cancelar()">Cancelar</button>
        <button nbButton status="danger" (click)="confirmar()">Excluir</button>
      </nb-card-footer>
    </nb-card>
  `
})
export class GenericCrudDeleteDialogComponent {
  @Input() itemName: string = '';
  @Input() itemId: any = null;

  constructor(private ref: NbDialogRef<GenericCrudDeleteDialogComponent>) {}

  cancelar(): void {
    this.ref.close(null);
  }

  confirmar(): void {
    this.ref.close({ id: this.itemId, deleted: true });
  }
}