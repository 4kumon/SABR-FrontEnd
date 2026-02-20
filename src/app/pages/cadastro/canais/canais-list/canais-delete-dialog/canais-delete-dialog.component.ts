import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-canais-delete-dialog',
  templateUrl: './canais-delete-dialog.component.html',
  styleUrls: ['./canais-delete-dialog.component.scss'],
})
export class CanaisDeleteDialogComponent {
  canal: any;
  isMultiple = false;

  constructor(private dialogRef: NbDialogRef<CanaisDeleteDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
