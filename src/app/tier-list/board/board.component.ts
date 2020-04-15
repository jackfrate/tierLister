import { Component, OnInit } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  readonly S = 'S';
  readonly A = 'A';
  readonly B = 'B';
  readonly C = 'C';
  readonly D = 'D';
  readonly F = 'F';
  readonly NOT_SET = 'NOT_SET';

  tiers: Map<string, TierListItem[]>;
  // nonTiered: TierListItem[];

  constructor() {
    this.setupTiers();
    // this.nonTiered = [];
  }

  ngOnInit(): void {
  }

  getTiers(): TierListItem[][] {
    const ret: TierListItem[][] = [];
    this.tiers.forEach((value: TierListItem[]) => {
      ret.push(value);
    });
    return ret;
  }

  private setupTiers() {
    // setup tier map
    this.tiers = new Map();
    this.tiers.set(this.S, []);
    this.tiers.set(this.A, []);
    this.tiers.set(this.B, []);
    this.tiers.set(this.C, []);
    this.tiers.set(this.D, []);
    this.tiers.set(this.F, []);
    this.tiers.set(this.NOT_SET, []);
  }

}
