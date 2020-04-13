import { Component, OnInit, Input } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() listItem: TierListItem;

  constructor() { }

  ngOnInit(): void {
    
  }

}
