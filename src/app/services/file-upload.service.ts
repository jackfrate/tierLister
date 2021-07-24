import { Injectable } from '@angular/core';
import { BoardSettingsService } from './board-settings.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  files: File[];

  constructor(private boardSettingsSvc: BoardSettingsService) {
    this.files = [];
  }

  async setBoardFromChosenFile(chosenFile) {
    const self = this;
    const reader = new FileReader();
    reader.onload =  (event) => {
      self.boardSettingsSvc.importFromJsonString(event.target.result.toString());
    }
    reader.readAsText(chosenFile);
  }
}