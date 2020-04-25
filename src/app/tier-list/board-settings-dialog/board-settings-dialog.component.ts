import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardSettingsService } from '../services/board-settings.service';

@Component({
  selector: 'app-board-settings-dialog',
  templateUrl: './board-settings-dialog.component.html',
  styleUrls: ['./board-settings-dialog.component.scss']
})
export class BoardSettingsDialogComponent implements OnInit {

  public name: string;
  public author: string;

  @ViewChild('boardNameInput') boardNameInput: MatInput;
  @ViewChild('boardAuthorInput') boardAuthorInput: MatInput;

  constructor(
    public dialogRef: MatDialogRef<BoardSettingsDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: BoardSettings,
    private boardSettingsSvc: BoardSettingsService
  ) {
    this.name = boardSettingsSvc.name;
    this.author = boardSettingsSvc.author;
  }

  ngOnInit(): void {
  }

  submitButton() {
    this.boardSettingsSvc.name = this.name;
    this.boardSettingsSvc.author = this.author;
    this.dialogRef.close();
  }

}

export interface BoardSettings {
  boardName: string;
  boardAuthor: string;
}
