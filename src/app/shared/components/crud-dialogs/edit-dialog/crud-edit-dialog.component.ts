import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'ngx-crud-edit-dialog',
  templateUrl: './crud-edit-dialog.component.html',
})
export class CrudEditDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  private ref = inject(NbDialogRef<CrudEditDialogComponent>);
  
  loading = false;
  title = 'Editar registro';
  entityData: any;

  form = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    store_name: [''],
    email: ['', Validators.email],
    whatsapp: [''],
    ie_exempt: [0],
    ie: [''],
  });

  ngOnInit(): void {
    if (this.entityData) {
      this.form.patchValue({
        id: this.entityData.id,
        name: this.entityData.name,
        store_name: this.entityData.storeName,
        email: this.entityData.email,
        whatsapp: this.entityData.whatsapp,
      });
    }
  }

  cancelar() {
    this.ref.close(null);
  }

  async salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    await new Promise((r) => setTimeout(r, 1200));
    
    const result = {
      id: this.form.value.id,
      name: this.form.value.name,
      store_name: this.form.value.store_name,
      email: this.form.value.email,
      whatsapp: this.form.value.whatsapp,
    };

    this.ref.close(result);
    this.loading = false;
  }
}