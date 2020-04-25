import { Injectable } from '@angular/core';
import { BoardSettingsService } from './board-settings.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  files: File[];
  chosenFile: File;

  constructor(boardSettingsSvc: BoardSettingsService) {
    this.files = [];
  }

  setBoardFromChosenFile() {
    
  }

  private convertJsonFileToString() {

  }
}
