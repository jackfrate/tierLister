import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { TierTrackerService } from '../services/tier-tracker.service';

@Component({
  selector: 'app-trash-can',
  templateUrl: './trash-can.component.html',
  styleUrls: ['./trash-can.component.scss']
})
export class TrashCanComponent implements OnInit {

  readonly emptyList = [];

  constructor(private tierSvc: TierTrackerService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    const item: TierListItem = event.item.data;
    this.tierSvc.removeItem(item);
  }
}
