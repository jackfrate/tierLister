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


  constructor(private http: HttpClient) {
  }

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
