import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogRef, NbCardModule, NbInputModule, NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormFieldConfig } from '../../../@core/models/form-field.models';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, NbCardModule, NbInputModule, NbButtonModule, NbIconModule, NbSelectModule, ReactiveFormsModule],
})
export class SharedDialogComponent implements OnInit {
  // Context properties (set by NbDialogService)
  mode: 'form' | 'delete' | 'export' = 'form';
  title: string = '';
  fields: FormFieldConfig[] = [];   // para mode 'form'
  data: any = null;                  // para mode 'form' (null=novo, objeto=edição)
  count: number = 0;                 // para mode 'delete' e 'export'
  total: number = 0;                 // para mode 'export'
  buttonStatus: string = 'primary';   // cor do botão de confirmação ('info', 'warning', 'danger', 'success')

  form!: FormGroup;
  isEditMode = false;

  constructor(
    private dialogRef: NbDialogRef<SharedDialogComponent>,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.mode === 'form') {
      this.isEditMode = !!this.data;
      this.buildForm();
    }
  }

  // ---- FORM MODE ----

  private buildForm(): void {
    const group: { [key: string]: any } = {};

    this.fields.forEach(field => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }

      const initialValue = this.isEditMode && this.data[field.name] !== undefined
        ? this.data[field.name]
        : (field.defaultValue ?? '');

      group[field.name] = [initialValue, validators];
    });

    this.form = this.fb.group(group);
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  isInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!(control && control.invalid && control.touched);
  }

  // ---- SHARED ----

  cancel(): void {
    if (this.mode === 'form') {
      this.dialogRef.close(null);
    } else {
      this.dialogRef.close(false);
    }
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  // ---- HELPERS ----

  get dialogTitle(): string {
    switch (this.mode) {
      case 'form':
        return this.isEditMode ? 'Editar - ' + this.title : 'Novo - ' + this.title;
      case 'delete':
        return 'Confirmar exclusão';
      case 'export':
        return 'Exportar CSV';
    }
  }
}