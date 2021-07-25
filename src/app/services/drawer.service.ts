import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  isOpen: boolean;
  isOpen$: Subject<boolean>;

  constructor(private deviceService: DeviceDetectorService) {
    this.isOpen = true;
    this.isOpen$ = new Subject();
    this.isOpen$.subscribe(value => {
      this.isOpen = value;
    });
  }

  toggleIsOpen() {
    this.isOpen$.next(!this.isOpen);
  }
}
