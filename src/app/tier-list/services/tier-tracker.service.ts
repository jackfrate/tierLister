import { Injectable } from '@angular/core';
import { TierListItem } from '../plain-objects/tier-list-item';
import { Tier } from '../plain-objects/tier';

@Injectable({
  providedIn: 'root'
})
/**
 * tracks tiers for a board
 */
export class TierTrackerService {
  public readonly baseTier: Tier;

  private tierMap: Map<TierListItem, Tier>;
  // List of tiers that does not include the baseTier
  private tiers: Tier[];

  constructor() {

  }

  /**
   * drops a TierListItem into the map
   * (will initially start in the gutter)
   */
  addItem(item: TierListItem) {
    this.tierMap.set(item, this.baseTier);
  }

  addTier(tier: Tier): void {
    this.tiers.push(tier);
  }

  // init stuff
  private initStuff(): void {
    this.tierMap = new Map<TierListItem, Tier>();
    this.tiers = [];
  }
}
