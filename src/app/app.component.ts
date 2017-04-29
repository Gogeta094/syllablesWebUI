import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { SettingsModalComponent } from './settings-modal/settings-modal.component'
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settings = null;

  constructor(private dialog: MdDialog) { }

  openSettingsModal() {
    let dialogRef = this.dialog.open(SettingsModalComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  title: string = 'app works!11';
}
