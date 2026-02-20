import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule, NbDialogModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { CanaisListComponent } from './canais/canais-list/canais-list.component';
import { CanaisFormDialogComponent } from './canais/canais-list/canais-form-dialog/canais-form-dialog.component';
import { CanaisDeleteDialogComponent } from './canais/canais-list/canais-delete-dialog/canais-delete-dialog.component';

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
    Ng2SmartTableModule,
    AgGridModule,
    CadastroRoutingModule,
  ],
  declarations: [
    ClienteComponent,
    CanaisListComponent,
    CanaisFormDialogComponent,
    CanaisDeleteDialogComponent,
  ],
})
export class CadastroModule { }