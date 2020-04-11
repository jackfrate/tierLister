import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { Tier } from '../plain-objects/tier';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // items that every local and global tierlist will reference
  public roomTListItems: TierListItem[];

  // map of what tier
  private tiers: Tier[];

  constructor() {
    this.roomTListItems = [];
    this.tiers = [];
  }

  getTiers(): Tier[] {
    return this.tiers;
  }

  addTier(tier: Tier) {
    this.tiers.push(tier);
    this.tiers.sort();
  }

  removeTier(tierName: string) {
    const filterFunc = (tier: Tier) => {
      // we pass the filter if the tier name is not identical
      return tier.name.toLowerCase() !== tierName.toLowerCase();
    }
    const filteredTiers = this.tiers.filter(filterFunc);
    this.tiers = filteredTiers;
    this.sortTiers();
  }

  /**
   * run this after messing with tiers to keep them sorted
   */
  private sortTiers() {
    // like a comparable in java
    const sortFunc = (o1: Tier, o2: Tier) => {
      return o1.ranking - o2.ranking;
    }
    const sortedTiers: Tier[] = this.tiers.sort(sortFunc);
    this.tiers = sortedTiers;
  }
}
