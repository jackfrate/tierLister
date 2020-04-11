import { Injectable } from '@angular/core';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientTierlistService {

  private 

  constructor(
    roomSvc: RoomService,
    userSvc: UserService
  ) { }
}
