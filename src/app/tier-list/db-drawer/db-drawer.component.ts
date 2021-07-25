import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardSettingsService } from 'src/app/services/board-settings.service';
import { DbService } from 'src/app/services/db.service';
import { DrawerService } from 'src/app/services/drawer.service';
import { JsonBoard } from '../plain-objects/json-board';
import { JsonBoardIdentifier } from '../plain-objects/json-board-identifier';

@Component({
  selector: 'app-db-drawer',
  templateUrl: './db-drawer.component.html',
  styleUrls: ['./db-drawer.component.scss']
})
export class DbDrawerComponent {

  boardList$: Observable<JsonBoardIdentifier[]>;

  selectedBoard: JsonBoard;
  cachedBoard: JsonBoard;

  selectionMade: boolean = false;

  constructor(
    private dbSvc: DbService,
    private boardSvc: BoardSettingsService,
    private drawerSvc: DrawerService,
  ) { }

  ngOnInit(): void {
    // link to the service
    this.getList();
    this.cachedBoard = this.boardSvc.uploadedBoard;
  }

  getList() {
    this.boardList$ = this.dbSvc.boardList$;
  }

  setBoard(boardId: number) {
    this.dbSvc.getBoard(boardId).subscribe(
      value => {
        this.selectedBoard = value;
        this.boardSvc.importFromTierList(value);
      });

  }

 

  collapseTierList() {
    return this.drawerSvc.toggleIsOpen();
  }
}
