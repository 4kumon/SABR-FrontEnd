import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';

import { CrudCreateDialogComponent } from './components/crud-dialogs/create-dialog/crud-create-dialog.component';
import { CrudEditDialogComponent } from './components/crud-dialogs/edit-dialog/crud-edit-dialog.component';
import { CrudDeleteDialogComponent } from './components/crud-dialogs/delete-dialog/crud-delete-dialog.component';

@NgModule({
  declarations: [
    CrudCreateDialogComponent,
    CrudEditDialogComponent,
    CrudDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbDialogModule,
    NbCardModule,
    NbInputModule,
    NbSpinnerModule,
    NbIconModule,
    NbButtonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NbDialogModule,
    NbCardModule,
    NbInputModule,
    NbSpinnerModule,
    NbIconModule,
    NbButtonModule,
    CrudCreateDialogComponent,
    CrudEditDialogComponent,
    CrudDeleteDialogComponent,
  ],
})
export class SharedModule {}
