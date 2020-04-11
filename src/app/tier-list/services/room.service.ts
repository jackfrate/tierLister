import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { Tier } from '../plain-objects/tier';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // items that every local and global tierlist will reference
  // TODO: this needs to be an observable, run the sort on updates
  // TODO: to handle soreting -> https://stackoverflow.com/questions/41224749/angular-2-sort-list-from-observable
  private _roomTListItems: Observable<TierListItem[]>;

  // map of what tier
  private _tiers: Observable<Tier>[];

  // users
  private users: Observable<User[]>

  // identifiers for the database
  private static readonly TLI_KEY = 'sampleText';
  private static readonly USERS_KEY = 'sampleText';
  private static readonly TIERS_KEY = 'sampleText';

  constructor(db: AngularFirestore) { }

  get roomTListItems(): Observable<TierListItem[]> {
    return this._roomTListItems;
  }

  addTierListItem(item: TierListItem) {
    // this._roomTListItems.push(item);
  }

  removeTierListItem(item: TierListItem) {
    // const filterFunc = (tli: TierListItem) => {
    //   // we pass the filter if the tier name is not identical
    //   if (tli.name) {
    //     return tli.name.toLowerCase() !== item.name.toLowerCase();
    //   }
    //   if (tli.url) {
    //     return tli.url.toLowerCase() !== item.url.toLowerCase();
    //   }
    // }
    // const filteredItems = this._roomTListItems.filter(filterFunc);
    // this._roomTListItems = filteredItems;
  }

  get tiers(): Observable<Tier>[] {
    return this._tiers;
  }

  addTier(tier: Tier) {
    // this._tiers.push(tier);
    // this._tiers.sort();
  }

  removeTier(tierName: string) {
    // const filterFunc = (tier: Tier) => {
    //   // we pass the filter if the tier name is not identical
    //   return tier.name.toLowerCase() !== tierName.toLowerCase();
    // }
    // const filteredTiers = this._tiers.filter(filterFunc);
    // this._tiers = filteredTiers;
    // this.sortTiers();
  }

  /**
   * run this after messing with tiers to keep them sorted
   */
  private sortTiers() {
    // like a comparable in java
    const sortFunc = (o1: Tier, o2: Tier) => {
      return o1.ranking - o2.ranking;
    }
    // const sortedTiers: Tier[] = this._tiers.sort(sortFunc);
    // this._tiers = sortedTiers;
  }
}
