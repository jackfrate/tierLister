// // unique identifier for no name
// const noNameSymbol = Symbol('no-name');

// abstract class TierListItemManager {
//     public static getTLItemUIState(tierListItem: TierListItem) {
//         const ret = {};
//         ret.name = tierListItem.name !== noNameSymbol
//     }
//     abstract createItem(name: string | Symbol, url?: string): TierListItem;
// }

// export class OnlyNameFactory {
//     createItem(name: string | Symbol, url?: string): TierListItem {

//     }
// }


// =========================================================================== //

export interface TierListItem {
    name?: string;
    url?: string;
}
