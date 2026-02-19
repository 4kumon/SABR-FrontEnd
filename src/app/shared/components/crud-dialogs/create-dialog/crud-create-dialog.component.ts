import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-crud-create-dialog',
  templateUrl: './crud-create-dialog.component.html',
})
export class CrudCreateDialogComponent {
  loading = false;
  title = 'Novo registro';

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
    private ref: NbDialogRef<CrudCreateDialogComponent>,
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

    this.ref.close(this.form.value);
  }
}