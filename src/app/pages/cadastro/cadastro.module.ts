import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteCreateDialogComponent } from './cliente/cliente-create-dialog/cliente-create-dialog.component';
import { ClienteEditDialogComponent } from './cliente/cliente-edit-dialog/cliente-edit-dialog.component';
import { ClienteDeleteDialogComponent } from './cliente/cliente-delete-dialog/cliente-delete-dialog.component';

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
    Ng2SmartTableModule,
    CadastroRoutingModule,
  ],
  declarations: [
    ClienteComponent,
    ClienteCreateDialogComponent,
    ClienteEditDialogComponent,
    ClienteDeleteDialogComponent,
  ],
})
export class CadastroModule { }