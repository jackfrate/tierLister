import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JsonBoard } from "../tier-list/plain-objects/json-board";


@Injectable({
  providedIn: 'root'
})
export class BoardSettingsService {

  static readonly S = 'S';
  static readonly A = 'A';
  static readonly B = 'B';
  static readonly C = 'C';
  static readonly D = 'D';
  static readonly E = 'E';
  static readonly F = 'F';
  static readonly NOT_SET = 'None';

  uploadedBoard: JsonBoard;
  uploadedBoardChange: Subject<JsonBoard>;

  name: string = 'yeet';
  author: string = 'jack';

  constructor() { 
    this.uploadedBoardChange = new Subject();
    this.uploadedBoardChange.subscribe((value) => {
      this.uploadedBoard = value;
    });
  }

  importFromJsonString(json: string) {
    const boardObject: JsonBoard = JSON.parse(json);
    this.uploadedBoardChange.next(boardObject);
  }

}
