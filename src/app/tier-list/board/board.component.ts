import { Component, OnInit } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  static readonly S = 'S';
  static readonly A = 'A';
  static readonly B = 'B';
  static readonly C = 'C';
  static readonly D = 'D';
  static readonly E = 'E';
  static readonly F = 'F';
  static readonly NOT_SET = 'None';

  tiers: Map<string, TierListItem[]>;

  colorMap: Map<string, string>;

  constructor() {
    this.setupTiers();
    this.setupColorMap();
    // test stuff
    this.doDummyData();
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
    this.tiers.set(BoardComponent.S, []);
    this.tiers.set(BoardComponent.A, []);
    this.tiers.set(BoardComponent.B, []);
    this.tiers.set(BoardComponent.C, []);
    this.tiers.set(BoardComponent.D, []);
    this.tiers.set(BoardComponent.E, []);
    this.tiers.set(BoardComponent.F, []);
    this.tiers.set(BoardComponent.NOT_SET, []);
  }

  private setupColorMap() {
    this.colorMap = new Map();
    this.colorMap.set(BoardComponent.S, "#ff7f7f");
    this.colorMap.set(BoardComponent.A, "#ffbf7f");
    this.colorMap.set(BoardComponent.B, "#ffff7f");
    this.colorMap.set(BoardComponent.C, "#7fff7f");
    this.colorMap.set(BoardComponent.D, "#7fbfff");
    this.colorMap.set(BoardComponent.E, "#7f7fff");
    this.colorMap.set(BoardComponent.F, "#ff7fff");
    this.colorMap.set(BoardComponent.NOT_SET, "#F8F8FF");
  }

  private doDummyData() {
    this.tiers.set(BoardComponent.NOT_SET, [
      {
        name: "jack"
      },
      {
        url: "https://i.imgur.com/uLZX5Wwg.jpg"
      }
    ]);
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
