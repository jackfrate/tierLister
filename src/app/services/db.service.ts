import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JsonBoard } from '../tier-list/plain-objects/json-board';
import { JsonBoardIdentifier } from '../tier-list/plain-objects/json-board-identifier';
@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor(private http: HttpClient) { }

  getBoardList(): Observable<JsonBoardIdentifier[]> {
    const url = `${environment.apiUrl}/tier-list-list`;
    return this.http.get<JsonBoardIdentifier[]>(url);
  }

  getBoard(id: number): Observable<JsonBoard> {
    const url = `${environment.apiUrl}/tier-list/${id}`;
    return this.http.get<JsonBoard>(url);
  }

  postBoard(board: JsonBoard): Observable<any> {
    const url = `${environment.apiUrl}/tier-list`;
    return this.http.post(url, board);
  }
}
