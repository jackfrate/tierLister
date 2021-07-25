import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-db-drawer',
  templateUrl: './db-drawer.component.html',
  styleUrls: ['./db-drawer.component.scss']
})
export class DbDrawerComponent {

  isOpen$: Observable<boolean>;

  constructor(private drawerSvc: DrawerService) {
    this.isOpen$ = this.drawerSvc.isOpen$;
  }

  collapseTierList() {
    return this.drawerSvc.keepTierListOpen();
  }
}
