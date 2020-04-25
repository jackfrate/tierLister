import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { JsonHandlerService, SavedBoard } from './json-handler.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardSettingsService {

  static readonly S = 'S';
  static readonly A = 'A';
  static readonly B = 'B';
  static readonly C = 'C';
  static readonly D = 'D';
  static readonly E = 'E';
  static readonly F = 'F';
  static readonly NOT_SET = 'None';

  name: string = 'yeet';
  author: string = 'jack';
  tiers: Map<string, TierListItem[]>;

  // observables
  tiersUpdate: Subject<Map<string, TierListItem[]>> = new Subject<Map<string, TierListItem[]>>();
  // nameUpdate: Subject<string> = new Subject<string>();
  // authorUpdate: Subject<string> = new Subject<string>();

  constructor(
    private jsonHandleSvc: JsonHandlerService,
    private sanitizer: DomSanitizer,
  ) {
    this.setUpBoard();
    // test stuff
    // this.doDummyData();
  }

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
      this.name,
      this.author
    );
  }

  importFromJsonString(json: string) {
    // do json stuff
    const result: SavedBoard = this.jsonHandleSvc.importFromJson(json);
    this.setFromSavedBoard(result);
  }

  getJsonDownloadLink(): SafeUrl {
    const jsonSavedBoard: string = this
      .jsonHandleSvc.exportToJSON(this.tiers, this.name, this.author);
    const blob = new Blob([jsonSavedBoard], { type: 'text/json' });
    const urlDownload = window.URL.createObjectURL(blob);
    const uriDownload: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(urlDownload);
    return uriDownload;
  }

  private setFromSavedBoard(saved: SavedBoard) {
    this.tiersUpdate.next(saved.boardMap);
    this.name = saved.boardName;
    this.author = saved.boardAuthor;
  }

  private setUpBoard() {
    this.setupTierList();
    // now subscribe
    this.tiersUpdate.subscribe((value: Map<string, TierListItem[]>) => {
      this.tiers = value;
    });
    // this.nameUpdate.subscribe((value: string) => {
    //   this.name = value;
    // });
    // this.authorUpdate.subscribe((value: string) => {
    //   this.author = value;
    // });
  }

  private setupTierList() {
    // setup tier map
    this.tiers = new Map();
    this.tiers.set(BoardSettingsService.S, []);
    this.tiers.set(BoardSettingsService.A, []);
    this.tiers.set(BoardSettingsService.B, []);
    this.tiers.set(BoardSettingsService.C, []);
    this.tiers.set(BoardSettingsService.D, []);
    this.tiers.set(BoardSettingsService.E, []);
    this.tiers.set(BoardSettingsService.F, []);
    this.tiers.set(BoardSettingsService.NOT_SET, []);
  }

  /**
   * just test for a url item and an text item
   */
  private doDummyData() {
    this.tiers.set(BoardSettingsService.NOT_SET, [
      {
        name: "jack"
      },
      {
        url: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png"
      }
    ]);
  }

  ngOnDestroy() {
    this.tiersUpdate.unsubscribe();
  }
}
