import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class SettingsModalContext extends BSModalContext {
}

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnInit, ModalComponent<SettingsModalContext> {
  context: SettingsModalContext

  constructor(public dialog: DialogRef<SettingsModalContext>) {
    this.context = dialog.context;  
    dialog.setCloseGuard(this); 
  }

  ngOnInit() {

  }

}
