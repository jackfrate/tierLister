import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  isOpen$: Observable<boolean>;

  constructor(private drawerSvc: DrawerService) {
    this.isOpen$ = this.drawerSvc.isOpen$;
  }

  ngOnInit(): void {
  }

  keepTierListOpen(): boolean {
    return this.drawerSvc.keepTierListOpen();
  }
  getDrawerStyle() {
    if (this.drawerSvc.keepTierListOpen()) {
      return '25%';
    }
    else {
      return '100%';
    }
  }
}
