import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule, NbDialogModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    SharedModule,
    NbDialogModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    NbIconModule,
    NbSelectModule,
    NbToastrModule,
    AgGridModule,
    CadastroRoutingModule,
  ],
})
export class CadastroModule { }