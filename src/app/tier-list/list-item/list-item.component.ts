import { Component, OnInit, Input } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  // style stuff
  static readonly itemBackgroundColors: string[] = [
    // "#4a6572",s
    // "#5d1049",
    "#004484",
    // "#356859"
  ];

  constructor() {

  }


  @Input() listItem: TierListItem;
  @Input() backgroundColor: string;

  url: string;
  name: string;

  ngOnInit(): void {
    this.determineState();
  }

  getRandomBackgroundColor(): string {
    // get a random color
    return ListItemComponent.itemBackgroundColors[
      Math.floor(Math.random() * ListItemComponent.itemBackgroundColors.length)
    ];
  }

  // state related methods
  private determineState(): void {
    if (this.listItem.url) {
      this.url = this.listItem.url;
    }
    else if (this.listItem.name) {
      this.name = this.listItem.name;
    }
  }

}
