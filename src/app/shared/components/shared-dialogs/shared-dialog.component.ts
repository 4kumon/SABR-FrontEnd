import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogRef, NbCardModule, NbInputModule, NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormFieldConfig } from '../../../@core/models/form-field.models';
import { TranslationService } from '../../../@core/services/translation.service';
import { TranslatePipe } from '../../../@core/pipes/translate.pipe';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, NbCardModule, NbInputModule, NbButtonModule, NbIconModule, NbSelectModule, ReactiveFormsModule, TranslatePipe],
})
export class SharedDialogComponent implements OnInit {
  mode: 'form' | 'delete' | 'export' = 'form';
  title: string = '';
  fields: FormFieldConfig[] = [];
  data: any = null;
  count: number = 0;
  total: number = 0;
  buttonStatus: string = 'primary';

  form!: FormGroup;
  isEditMode = false;

  constructor(
    private dialogRef: NbDialogRef<SharedDialogComponent>,
    private fb: FormBuilder,
    private t: TranslationService,
  ) {}

  ngOnInit(): void {
    if (this.mode === 'form') {
      this.isEditMode = !!this.data;
      this.buildForm();
    }
  }

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

  get dialogTitle(): string {
    switch (this.mode) {
      case 'form':
        return this.isEditMode
          ? this.t.get('dialog.editPrefix') + ' - ' + this.title
          : this.t.get('dialog.newPrefix') + ' - ' + this.title;
      case 'delete':
        return this.t.get('dialog.confirmDelete');
      case 'export':
        return this.t.get('dialog.exportCsv');
    }
  }
}
