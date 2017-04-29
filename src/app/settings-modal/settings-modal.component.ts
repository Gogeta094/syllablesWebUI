import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.css']
})
export class SettingsModalComponent implements OnInit {
  separationModes = [];
  selectedSeparationMode = null;
  characterTables = [];
  selectedTable = null;
  separator: string = "-";

  constructor(private _dialog: MdDialogRef<SettingsModalComponent>) {    
    
  }

  ngOnInit(): void {
    this.separationModes = [
      { id: 1, name: "cc-c" },
      { id: 2, name: "c-cc" },
    ];
    this.selectedSeparationMode = this.separationModes[0];

    this.characterTables = [
      { id: 1, name: "Table1" },
      { id: 1, name: "Table2" },
    ];
    this.selectedTable = this.characterTables[0];
  }

  closeSettingsDialog(): void{
    this._dialog.close();
  }
}
