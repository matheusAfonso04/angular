import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  nome: string;
  constructor(public dialog: MatDialog) {}

  openDialog(nome: string) {
    let dialogRef = this.dialog.open(LiveFormDialogComponent, {
      data: { nome: nome },
    });
    dialogRef.afterOpened().subscribe();
  }
}
