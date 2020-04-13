import { Component, OnInit, Input } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { Tier } from '../plain-objects/tier';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  readonly urlItemState: string = 'URL_STATE';
  readonly nameItemState: string = 'NAME_STATE';

  itemState: string;

  @Input() listItem: TierListItem;

  constructor() { }

  ngOnInit(): void {
    this.determineState();
  }

  getListForTier(tierName: string) {

  }

  // state related methods
  private determineState(): void {
    if (this.listItem.url) {
      this.itemState = this.urlItemState;
    }
    else if (this.listItem.name) {
      this.itemState = this.nameItemState;
    }
  }

}
