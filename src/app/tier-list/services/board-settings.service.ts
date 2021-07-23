import { Injectable } from '@angular/core';
import { JsonBoard } from '../board/board.component';
import { JsonHandlerService, SavedBoard } from './json-handler.service';


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

  name: string = 'yeet';
  author: string = 'jack';

  // TODO: make an observable of json uploads
  // subscribe in board component, whenever a new one is pushed, revieve it, 
  // then clear and re-populate the tiers
  constructor() { }


  importFromJsonString(json: string) {
    // do json stuff

  }



  private setFromSavedBoard(saved: JsonBoard) {

  }
}
