import { Component, OnInit } from '@angular/core';
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

  constructor(private dbSvc: DbService) {
    this.boardList$ = this.dbSvc.boards$;
  }

  ngOnInit(): void {
  }

}
