import { Component, OnInit } from '@angular/core';
import { ClientTierlistService } from 'src/app/tier-list/services/client-tierlist.service';
import { GlobalTierlistService } from 'src/app/tier-list/services/global-tierlist.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    clientTierListSvc: ClientTierlistService,
    globalTierListSvc: GlobalTierlistService
  ) { }

  ngOnInit(): void {
  }

}
