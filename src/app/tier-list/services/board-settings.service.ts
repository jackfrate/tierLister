import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';

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

  constructor() {
    this.setUpBoard();
    // test stuff
    this.doDummyData();
  }

  private setUpBoard() {
    this.setupTierList();
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
}
