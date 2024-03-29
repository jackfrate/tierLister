import { TierListItem } from './tier-list-item';


export interface JsonBoard {
  id?: string;
  name?: string;
  sTier: TierListItem[];
  aTier: TierListItem[];
  bTier: TierListItem[];
  cTier: TierListItem[];
  dTier: TierListItem[];
  eTier: TierListItem[];
  fTier: TierListItem[];
  noTier: TierListItem[];
}
