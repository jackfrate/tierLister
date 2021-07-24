import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JsonBoard } from '../plain-objects/json-board';
import { JsonBoardIdentifier } from '../plain-objects/json-board-identifier';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  boards$: Observable<JsonBoardIdentifier[]>;

  constructor(private http: HttpClient) { }

  getBoardList() {
    this.boards$ = this.http.get<JsonBoardIdentifier[]>(`${environment.apiUrl}/tier-list-list`);
  }

  getBoard(id: number): Observable<JsonBoard> {
    return this.http.get<JsonBoard>(`${environment.apiUrl}/tier-list/${id}`);
  }

  postBoard(board: JsonBoard): Observable<any> {
    return this.http.post(`${environment.apiUrl}/tier-list`, board);
  }
}
