import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { FormField, DialogConfig } from '../models/form-field.model';

@Component({
  selector: 'ngx-generic-crud-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbSpinnerModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule
  ],
  template: `
    <nb-card [nbSpinner]="loading" nbSpinnerStatus="primary" nbSpinnerMessage="Salvando...">
      <nb-card-header>
        {{ config?.title || 'Editar registro' }}
        <button nbButton ghost status="danger" size="medium" (click)="cancelar()" 
                style="float: right; margin-top: -5px;" type="button" tabindex="-1">
          <nb-icon icon="close-outline"></nb-icon>
        </button>
      </nb-card-header>

      <nb-card-body>
        <ng-container *ngFor="let field of config?.fields">
          <label>{{ field.label }} <span *ngIf="field.required" style="color: red;">*</span></label>
          
          <!-- Input Text -->
          <input *ngIf="field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number'"
                 nbInput 
                 [fullWidth]="true" 
                 [placeholder]="field.placeholder || field.label"
                 [type]="field.type"
                 [formControlName]="field.key" />
          
          <!-- Textarea -->
          <textarea *ngIf="field.type === 'textarea'"
                    nbInput 
                    fullWidth 
                    [placeholder]="field.placeholder || field.label"
                    [formControlName]="field.key"
                    rows="3">
          </textarea>
          
          <!-- Select -->
          <nb-select *ngIf="field.type === 'select'"
                     fullWidth
                     [placeholder]="field.placeholder || field.label"
                     [formControlName]="field.key">
            <nb-option *ngFor="let option of field.options" [value]="option.value">
              {{ option.label }}
            </nb-option>
          </nb-select>
          
          <br /><br />
        </ng-container>
      </nb-card-body>

      <nb-card-footer style="display: flex; justify-content: center;">
        <button nbButton status="success" (click)="salvar()" [disabled]="loading || form.invalid">
          Salvar
        </button>
      </nb-card-footer>
    </nb-card>
  `
})
export class GenericCrudEditDialogComponent implements OnInit {
  @Input() config: DialogConfig | null = null;
  
  loading = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ref: NbDialogRef<GenericCrudEditDialogComponent>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.patchInitialData();
  }

  private buildForm(): void {
    const fieldsConfig: any = {};
    
    if (this.config?.fields) {
      this.config.fields.forEach(field => {
        const validators = [];
        
        if (field.validators?.required) {
          validators.push(Validators.required);
        }
        if (field.validators?.email) {
          validators.push(Validators.email);
        }
        if (field.validators?.minLength) {
          validators.push(Validators.minLength(field.validators.minLength));
        }
        if (field.validators?.maxLength) {
          validators.push(Validators.maxLength(field.validators.maxLength));
        }
        if (field.validators?.pattern) {
          validators.push(Validators.pattern(field.validators.pattern));
        }
        
        fieldsConfig[field.key] = ['', validators];
      });
    }
    
    this.form = this.fb.group(fieldsConfig);
  }

  private patchInitialData(): void {
    if (this.config?.initialData) {
      this.form.patchValue(this.config.initialData);
    }
  }

  cancelar(): void {
    this.ref.close(null);
  }

  async salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    // Simula salvamento - aqui você pode chamar seu serviço
    await new Promise((r) => setTimeout(r, 500));
    this.loading = false;

    this.ref.close(this.form.value);
  }
}