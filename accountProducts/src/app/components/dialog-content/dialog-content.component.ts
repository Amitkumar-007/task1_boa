import { Component, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogdataComponent } from './dialogdata/dialogdata.component';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
    @Input() buttonTitle: String = "default";
    @Input() dialog_title: String = "default_title";
    @Input() dialog_body: String = "default_body";
    
    constructor(private dialog : MatDialog){}

    openDialog() {
      const dialogRef = this.dialog.open(DialogdataComponent,{
        data: {
          dialog_title : this.dialog_title,
          dialog_body : this.dialog_body
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
