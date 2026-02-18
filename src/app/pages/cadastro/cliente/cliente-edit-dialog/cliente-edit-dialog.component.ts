import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-cliente-edit-dialog',
  templateUrl: './cliente-edit-dialog.component.html',
  styleUrls: ['./cliente-edit-dialog.component.scss'],
})
export class ClienteEditDialogComponent {
  loading = false;
  clienteData: any;

  form = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    store_name: [''],
    email: ['', Validators.email],
    whatsapp: [''],
    ie_exempt: [0],
    ie: [''],
  });

  constructor(
    private fb: FormBuilder,
    private ref: NbDialogRef<ClienteEditDialogComponent>,
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

    const result = {
      id: this.form.value.id,
      firstName: this.form.value.name,
      lastName: this.form.value.store_name,
      username: this.form.value.email,
      email: this.form.value.whatsapp,
    };

    this.ref.close(result);
  }
}