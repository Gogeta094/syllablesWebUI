import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { SettingsModalComponent } from './settings-modal/settings-modal.component'
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MdDialog) {
  }

  openSettingsModal() {
    this.dialog.open(SettingsModalComponent, {
      height: '400px',
      width: '600px'
    });
  }

  title: string = 'app works!11';
}
