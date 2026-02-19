import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from '../../@theme/theme.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteCreateDialogComponent } from './cliente/cliente-create-dialog/cliente-create-dialog.component';
import { ClienteEditDialogComponent } from './cliente/cliente-edit-dialog/cliente-edit-dialog.component';
import { ClienteDeleteDialogComponent } from './cliente/cliente-delete-dialog/cliente-delete-dialog.component';
import { CanaisListComponent } from './canais/canais-list/canais-list.component';
import { CanaisFormDialogComponent } from './canais/canais-list/canais-form-dialog/canais-form-dialog.component';
import { CanaisDeleteDialogComponent } from './canais/canais-list/canais-delete-dialog/canais-delete-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
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
    ClienteCreateDialogComponent,
    ClienteEditDialogComponent,
    ClienteDeleteDialogComponent,
    CanaisListComponent,
    CanaisFormDialogComponent,
    CanaisDeleteDialogComponent,
  ],
})
export class CadastroModule { }