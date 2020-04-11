import { Component, OnInit } from '@angular/core';
import { ClientTierlistService } from 'src/app/tier-list/services/client-tierlist.service';
import { RoomService } from '../services/room.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    clientTierListSvc: ClientTierlistService,
    roomSvc: RoomService
  ) { }

  ngOnInit(): void {
  }



}
