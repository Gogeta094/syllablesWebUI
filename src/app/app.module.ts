import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { alert, buttons, jumbotron, grid } from 'bootstrap-css';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SettingsModalComponent]
})
export class AppModule {

}
