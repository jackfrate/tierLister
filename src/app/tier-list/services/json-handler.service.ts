import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class JsonHandlerService {

  private encoder: HttpUrlEncodingCodec;

  // used to download the json
  downloadJsonLink: SafeUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.encoder = new HttpUrlEncodingCodec();
  }

  /**
   * exports the tierlist to json
   */
  exportToJSON(
    map: Map<string, TierListItem[]>,
    boardName?: string,
    boardAuthor?: string
  ): string {
    const boardJson = {
      boardMap: this.strMapToObj(map),
      boardName: boardName,
      boardAuthor: boardAuthor,
    };
    return JSON.stringify(boardJson);
  }

  importFromJson(json: string): SavedBoard {
    const objFromString: SavedBoardDeStringified = JSON.parse(json);
    const map = this.objToStrMap(objFromString.boardMap)
    return {
      boardMap: map,
      boardName: objFromString.boardName,
      boardAuthor: objFromString.boardAuthor,
    }
  }

  /**
   * exports to an encoded url,
   * used for sharing a link of your tierlist
   */
  exportToEncodedJSON(
    map: Map<string, TierListItem[]>,
    boardName?: string,
    boardAuthor?: string
  ): string {
    const jsonString = this.exportToJSON(map, boardName, boardAuthor)
    return this.encoder.encodeValue(jsonString);
  }

  // TODO: make private
  translateEncodedJson(encoded: string): SavedBoard {
    // TODO: wrap in try/catch
    const decodedJson = this.encoder.decodeValue(encoded);
    return this.importFromJson(decodedJson);
  }

  downloadBoardJson(
    map: Map<string, TierListItem[]>,
    boardName?: string,
    boardAuthor?: string
  ) {
    const jsonSavedBoard = this.exportToJSON(map, boardName, boardAuthor);
    const uriDownload = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonSavedBoard));
    this.downloadJsonLink = uriDownload;
  }

  private objToStrMap(obj: Object) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  private strMapToObj(strMap: Map<string, any>): Object {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }
}

export interface SavedBoard {
  boardMap: Map<string, TierListItem[]>;
  boardName: string;
  boardAuthor: string;
}

// marker interface for de-stringifying
interface SavedBoardDeStringified {
  boardMap: Object;
  boardName: string;
  boardAuthor: string;
}
