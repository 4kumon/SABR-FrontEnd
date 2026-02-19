import { Component } from '@angular/core';
import { NbDialogRef, NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'ngx-crud-delete-dialog',
  templateUrl: './crud-delete-dialog.component.html',
})
export class CrudDeleteDialogComponent {
  entityName: string = '';
  entityType: string = 'registro';

  constructor(
    private ref: NbDialogRef<CrudDeleteDialogComponent>,
  ) {}

  cancelar() {
    this.ref.close(false);
  }

  confirmar() {
    this.ref.close(true);
  }
}