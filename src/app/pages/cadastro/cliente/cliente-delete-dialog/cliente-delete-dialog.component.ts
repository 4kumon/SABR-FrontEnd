import { Component } from '@angular/core';
import { NbDialogRef, NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'ngx-cliente-delete-dialog',
  templateUrl: './cliente-delete-dialog.component.html',
  styleUrls: ['./cliente-delete-dialog.component.scss'],
})
export class ClienteDeleteDialogComponent {
  clienteNome: string = '';

  constructor(
    private ref: NbDialogRef<ClienteDeleteDialogComponent>,
  ) {}

  cancelar() {
    this.ref.close(false);
  }

  confirmar() {
    this.ref.close(true);
  }
}