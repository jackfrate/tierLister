import { Component, OnInit, ViewChild } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KeyValue } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { SafeUrl } from '@angular/platform-browser';
import { MatInput } from '@angular/material/input';
import { BoardSettingsDialogComponent } from '../board-settings-dialog/board-settings-dialog.component';
import { BoardSettingsService } from '../services/board-settings.service';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @ViewChild('boardNameInput') boardNameInput: MatInput;
  @ViewChild('boardAuthorInput') boardAuthorInput: MatInput;


  colorMap: Map<string, string>;

  public sTier: TierListItem[] = [];
  public aTier: TierListItem[] = [];
  public bTier: TierListItem[] = [];
  public cTier: TierListItem[] = [];
  public dTier: TierListItem[] = [];
  public eTier: TierListItem[] = [];
  public fTier: TierListItem[] = [];
  public noTier: TierListItem[] = [];

  trash = [];

  constructor(public dialog: MatDialog) {
    this.setupColorMap();
  }

  ngOnInit(): void {
  }

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

  deleteItem() {

  }

  // methods that should kinda be private but aren't because of template
  // feel free to use them, just be careful I guess

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
