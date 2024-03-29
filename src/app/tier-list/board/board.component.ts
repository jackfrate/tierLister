import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { MatDialog } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatInput } from '@angular/material/input';
import { BoardSettingsDialogComponent } from '../board-settings-dialog/board-settings-dialog.component';
import { BoardSettingsService } from '../../services/board-settings.service';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { JsonBoard } from '../plain-objects/json-board';
import { DbDialogComponent } from '../db-dialog/db-dialog.component';
import { DrawerService } from 'src/app/services/drawer.service';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  @ViewChild('boardNameInput') boardNameInput: MatInput;
  @ViewChild('boardAuthorInput') boardAuthorInput: MatInput;


  colorMap: Map<string, string>;

  sTier: TierListItem[] = [];
  aTier: TierListItem[] = [];
  bTier: TierListItem[] = [];
  cTier: TierListItem[] = [];
  dTier: TierListItem[] = [];
  eTier: TierListItem[] = [];
  fTier: TierListItem[] = [];
  noTier: TierListItem[] = [];
  trash = [];

  constructor(
    public dialog: MatDialog,
    private boardSettingsSvc: BoardSettingsService,
    private drawerSvc: DrawerService,
    private dbSvc: DbService,
    private sanitizer: DomSanitizer,
  ) {
    this.setupColorMap();
  }

  ngOnInit() {
    this.boardSettingsSvc.uploadedBoardChange.subscribe(value => {
      this.updateBoardFromObject(value);
    });
  }

  ngOnDestroy() {
    this.boardSettingsSvc.uploadedBoardChange.unsubscribe();
  }

  //
  // Event stuff
  //

  drop(event: CdkDragDrop<string[]>) {
    // if we drag it into the same tier, rearrange the order
    if (event.isPointerOverContainer === false) {
      transferArrayItem(
        event.previousContainer.data,
        this.trash,
        event.previousIndex,
        event.currentIndex
      );
      // gotta empty the trash
      this.trash = [];
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  //
  // JSON Stuff
  //

  updateBoardFromObject(jsonBoard: JsonBoard) {
    this.sTier = jsonBoard.sTier;
    this.aTier = jsonBoard.aTier;
    this.bTier = jsonBoard.bTier;
    this.cTier = jsonBoard.cTier;
    this.dTier = jsonBoard.dTier;
    this.eTier = jsonBoard.eTier;
    this.fTier = jsonBoard.fTier;
    this.noTier = jsonBoard.noTier;
  }

  exportToJson(): string {
    return JSON.stringify(this.createBoardObject());
  }

  getDownloadName(): string {
    return `${this.boardSettingsSvc.name}.json`;
  }

  getJsonDownloadLink(): SafeUrl {
    const jsonString = this.exportToJson();
    const blob = new Blob([jsonString], { type: 'text/json' });
    const urlDownload = window.URL.createObjectURL(blob);
    const uriDownload: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(urlDownload);
    return uriDownload;
  }

  createBoardObject(): JsonBoard {
    return {
      sTier: this.sTier,
      aTier: this.aTier,
      bTier: this.bTier,
      cTier: this.cTier,
      dTier: this.dTier,
      eTier: this.eTier,
      fTier: this.fTier,
      noTier: this.noTier,
      name: this.boardSettingsSvc.name,
    };
  }

  //
  // dialog stuff
  //

  openNewItemDialog(): void {
    this.dialog.open(NewItemDialogComponent, {
      width: '400px',
      data: this.noTier
    });
  }

  openBoardSettingsDialog(): void {
    this.dialog.open(BoardSettingsDialogComponent, {
      width: '250px',
    });
  }

  openUploadDialog(): void {
    this.dialog.open(UploadDialogComponent, {
      width: '400px',
      // height: '600px'
    });
  }

  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent,
      {
        width: '400px'
      }
    );
  }

  openDbDialog(): void {
    this.dialog.open(DbDialogComponent,
      {
        width: '400px',
        height: '75vh'
      });
  }

  openDbDrawer(): void {
    this.drawerSvc.toggleIsOpen();
  }

  uploadBoard() {
    return this.dbSvc.postBoard(this.createBoardObject())
      .subscribe(data => {
        console.log(data);
        this.dbSvc.getBoardList();
      });
  }

  public addTierItem(tierItem: TierListItem) {
    // do nothing if we have nothing
    if (!tierItem.name && !tierItem.url) {
      return;
    }
    else {
      this.noTier.push(tierItem);
    }
  }

  private setupColorMap() {
    this.colorMap = new Map();
    this.colorMap.set(BoardSettingsService.S, "#ff7f7f");
    this.colorMap.set(BoardSettingsService.A, "#ffbf7f");
    this.colorMap.set(BoardSettingsService.B, "#ffff7f");
    this.colorMap.set(BoardSettingsService.C, "#7fff7f");
    this.colorMap.set(BoardSettingsService.D, "#7fbfff");
    this.colorMap.set(BoardSettingsService.E, "#7f7fff");
    this.colorMap.set(BoardSettingsService.F, "#ff7fff");
    this.colorMap.set(BoardSettingsService.NOT_SET, "#F8F8FF");
  }

}


