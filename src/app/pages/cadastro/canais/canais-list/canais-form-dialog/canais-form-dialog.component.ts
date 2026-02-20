import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogRef, NbToastrService, NbCardModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-canais-form-dialog',
  templateUrl: './canais-form-dialog.component.html',
  styleUrls: ['./canais-form-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, NbCardModule, NbInputModule, NbButtonModule, NbIconModule, ReactiveFormsModule],
})
export class CanaisFormDialogComponent implements OnInit {
  canal: any;
  form: FormGroup;
  isEditMode = false;

  constructor(
    private dialogRef: NbDialogRef<CanaisFormDialogComponent>,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', Validators.required],
      status: ['Ativo', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.canal) {
      this.isEditMode = true;
      this.form.patchValue({
        nome: this.canal.nome,
        tipo: this.canal.tipo,
        status: this.canal.status,
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.dialogRef.close(this.form.value);
  }
}