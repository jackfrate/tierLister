import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KeyValue } from '@angular/common';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { JsonHandlerService, SavedBoard } from '../services/json-handler.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { MatInput } from '@angular/material/input';
import { BoardSettingsDialogComponent } from '../board-settings-dialog/board-settings-dialog.component';
import { BoardSettingsService } from '../services/board-settings.service';
import { FileUploadService } from '../services/file-upload.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {



  tiers: Map<string, TierListItem[]>;

  colorMap: Map<string, string>;

  @ViewChild('boardNameInput') boardNameInput: MatInput;
  @ViewChild('boardAuthorInput') boardAuthorInput: MatInput;

  constructor(
    public dialog: MatDialog,
    private jsonHandleSvc: JsonHandlerService,
    private sanitizer: DomSanitizer,
    private boardSettingsSvc: BoardSettingsService,
    // private fileUploadSvc: FileUploadService
  ) {
    this.setUpBoard();
    this.setupColorMap();
  }

  ngOnInit(): void { }

  getTiers(): TierListItem[][] {
    const ret: TierListItem[][] = [];
    this.tiers.forEach((value: TierListItem[]) => {
      ret.push(value);
    });
    return ret;
  }

  addTierItem(tierItem: TierListItem) {
    // do nothing if we have nothing
    if (!tierItem.name && !tierItem.url) {
      return;
    }
    else {
      this.tiers.get(BoardSettingsService.NOT_SET).push(tierItem);
    }
  }

  exportToJson(): string {
    return this.jsonHandleSvc.exportToJSON(
      this.tiers,
      this.boardSettingsSvc.name,
      this.boardSettingsSvc.author
    );
  }

  importFromJsonString(json: string) {

  }

  getJsonDownloadLink(): SafeUrl {
    const jsonSavedBoard: string = this
      .jsonHandleSvc.exportToJSON(this.tiers, this.boardSettingsSvc.name, this.boardSettingsSvc.author);
    const blob = new Blob([jsonSavedBoard], { type: 'text/json' });
    const urlDownload = window.URL.createObjectURL(blob);
    const uriDownload: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(urlDownload);
    return uriDownload;
  }

  getDownloadName(): string {
    return `${this.boardSettingsSvc.name}.json`;
  }

  //
  // private and privateish stuff
  //


  private setUpBoard() {
    this.setupTierList();
  }

  private setupTierList() {
    // setup tier map
    this.tiers = this.boardSettingsSvc.tiers;
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

  // methods that should kinda be private but aren't because of template
  // feel free to use them, just be careful I guess

  openNewItemDialog(): void {
    this.dialog.open(NewItemDialogComponent, {
      width: '400px',
      data: this.tiers.get(BoardSettingsService.NOT_SET)
    });
  }

  openBoardSettingsDialog(): void {
    this.dialog.open(BoardSettingsDialogComponent, {
      width: '250px',
      // data: { boardName: this.boardName, boardAuthor: this.boardAuthor }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /**
   * orders the tiers from the map properly
   * @param a
   * @param b
   */
  compareFn(a: KeyValue<string, TierListItem[]>, b: KeyValue<string, TierListItem[]>): number {
    // this ensures that we sort in order of insertion
    return 0;
  }

}
