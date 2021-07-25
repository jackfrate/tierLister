import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BoardSettingsService } from 'src/app/services/board-settings.service';
import { DbService } from 'src/app/services/db.service';
import { JsonBoard } from '../plain-objects/json-board';
import { JsonBoardIdentifier } from '../plain-objects/json-board-identifier';

@Component({
  selector: 'app-db-dialog',
  templateUrl: './db-dialog.component.html',
  styleUrls: ['./db-dialog.component.scss']
})
export class DbDialogComponent implements OnInit, OnDestroy {

  boardList$: Observable<JsonBoardIdentifier[]>;

  selectedBoard: JsonBoard;
  cachedBoard: JsonBoard;

  selectionMade: boolean = false;

  constructor(
    private dbSvc: DbService,
    private boardSvc: BoardSettingsService,
    public dialogRef: MatDialogRef<DbDialogComponent>,
  ) { }

  ngOnInit(): void {
    // link to the service
    this.getList();
    this.cachedBoard = this.boardSvc.uploadedBoard;
  }

  getList() {
    this.boardList$ = this.dbSvc.getBoardList();
  }

  setBoard(boardId: number) {
    this.dbSvc.getBoard(boardId).subscribe(
      value => {
        this.selectedBoard = value;
        this.boardSvc.importFromTierList(value);
      });
  }

  ngOnDestroy() {
  }
}
