import { Injectable } from '@angular/core';
import { BoardSettingsService } from './board-settings.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(boardSettingsSvc: BoardSettingsService) { }

  setBoardFromFile() {

  }

  private convertJsonFileToString() {

  }
}
