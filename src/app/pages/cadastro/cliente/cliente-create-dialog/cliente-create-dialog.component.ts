import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-cliente-create-dialog',
  templateUrl: './cliente-create-dialog.component.html',
  styleUrls: ['./cliente-create-dialog.component.scss'],
})
export class ClienteCreateDialogComponent {
  loading = false;

  form = this.fb.group({
    name: ['', Validators.required],
    store_name: [''],
    email: ['', Validators.email],
    whatsapp: [''],
    ie_exempt: [0],
    ie: [''],
  });

  constructor(
    private fb: FormBuilder,
    private ref: NbDialogRef<ClienteCreateDialogComponent>,
  ) {}

  cancelar() {
    this.ref.close(null);
  }

  async salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    await new Promise((r) => setTimeout(r, 1200)); // simula salvar
    this.loading = false;

    this.ref.close(this.form.value); // fecha devolvendo dados [web:54]
  }
}

