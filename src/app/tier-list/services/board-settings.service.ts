import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardSettingsService {

  name: string = 'yeet';
  author: string = 'jack';

  constructor() { }
}
