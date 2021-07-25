import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  isOpen: boolean = false;
  isOpen$: Subject<boolean>;

  constructor(private deviceService: DeviceDetectorService) {
    this.isOpen$ = new Subject();
    this.isOpen$.subscribe(value => {
      this.isOpen = value;
    });
    // need this for it to work on first press
    this.isOpen$.next(false);
  }

  toggleIsOpen() {
    this.isOpen$.next(!this.isOpen);
  }

  keepTierListOpen(): boolean {
    return (this.isOpen && this.deviceService.isMobile())
      ? false
      : true;
  }
}
