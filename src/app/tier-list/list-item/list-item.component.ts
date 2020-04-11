import { Component, OnInit, Input } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  static readonly NAME_ONLY = Symbol('name');
  static readonly URL_ONLY = Symbol('url');
  static readonly NAME_URL = Symbol('name_url');

  @Input() listItem: TierListItem;

  uiState: symbol;

  constructor() { }

  ngOnInit(): void {
    // can't access inputs in controller
    this.determineState();
  }

  private determineState() {
    if (!this.listItem.url) {
      this.uiState = ListItemComponent.NAME_ONLY;
    }
    if (!this.listItem.name) {
      this.uiState = ListItemComponent.URL_ONLY;
    }
    this.uiState = ListItemComponent.NAME_URL;
  }

  // used for compare by template
  
  isNameOnly() {
    return this.uiState === ListItemComponent.NAME_ONLY;
  }

  isUrlOnly() {
    return this.uiState === ListItemComponent.URL_ONLY;
  }

  isNameUrl() {
    return this.uiState === ListItemComponent.NAME_URL;
  }
}
