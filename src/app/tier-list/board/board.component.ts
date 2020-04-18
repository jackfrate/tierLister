import { Component, OnInit } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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
    this.doDummyData();
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

  private doDummyData() {
    this.tiers.set(this.NOT_SET, [
      {
        name: "jack"
      },
      {
        url: "https://i.imgur.com/uLZX5Wwg.jpg"
      }

    ])
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

}
