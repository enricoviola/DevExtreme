import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pop-up-material',
  templateUrl: './pop-up-material.component.html',
  styleUrls: ['./pop-up-material.component.css']
})
export class PopUpMaterialComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMaterial, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}




@Component({
  selector: 'DialogMaterial',
  templateUrl: 'dialogMaterial.html',
})

export class DialogMaterial {
  constructor(
    public dialogRef: MatDialogRef<DialogMaterial>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
