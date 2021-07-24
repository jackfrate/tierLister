import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/services/db.service';
import { JsonBoardIdentifier } from '../plain-objects/json-board-identifier';

@Component({
  selector: 'app-db-dialog',
  templateUrl: './db-dialog.component.html',
  styleUrls: ['./db-dialog.component.scss']
})
export class DbDialogComponent implements OnInit {

  boardList$: Observable<JsonBoardIdentifier[]>;

  constructor(
    private dbSvc: DbService,
    public dialogRef: MatDialogRef<DbDialogComponent>
  ) { }

  ngOnInit(): void {
    // link to the service
    this.getList();
  }

  getList() {
    this.boardList$ = this.dbSvc.getBoardList();
  }
}
