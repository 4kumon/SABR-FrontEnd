import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from './cliente/cliente.component';

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
    Ng2SmartTableModule,
    CadastroRoutingModule,
  ],
  declarations: [
    ClienteComponent,
  ],
})
export class CadastroModule { }