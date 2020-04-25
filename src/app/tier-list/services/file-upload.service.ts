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
    reader.onload = function (event) {
      console.log(event.target.result);
      self.boardSettingsSvc.importFromJsonString(event.target.result.toString());
    }
    reader.readAsText(chosenFile);

    // try {
    //   // const type = chosenFile.type;
    //   const res = await chosenFile.text();
    //   this.boardSettingsSvc.importFromJsonString(res);
    // } catch (e) {
    //   console.log(e);
  }


  // we need to make the file a blob

  // make file into json
  // const fileReader = new FileReader();
  // fileReader.onload = (e) => {
  //   const stringFile = e.target.result.toString();
  //   this.boardSettingsSvc.importFromJsonString(stringFile);
  // }
  // fileReader.readAsText(chosenFile);
}

