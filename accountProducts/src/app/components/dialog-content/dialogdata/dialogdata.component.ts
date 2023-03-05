import { Component, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.scss']
})
export class DialogdataComponent {
    @Input() dialog_title: string = "header_part";
    @Input() dialog_body: string = "content_part";
    constructor( @Inject(MAT_DIALOG_DATA) public data: any){}
    ngOnInit() {
      console.log("dialog_data",this.data)
      this.dialog_title = this.data?.dialog_title==undefined?this.dialog_title:this.data?.dialog_title;
      this.dialog_body = this.data?.dialog_body == undefined?this.dialog_body:this.data?.dialog_body;
    }

}
