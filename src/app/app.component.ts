import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { SettingsModalComponent, SettingsModalContext } from './settings-modal/settings-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Modal]
})
export class AppComponent {

  constructor(vcRef: ViewContainerRef, public modal: Modal) {
    
  }

  openSettingsModal() {
    this.modal.open(SettingsModalComponent, new SettingsModalContext())
  }

  title: string = 'app works!11';
}
