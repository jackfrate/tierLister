// // unique identifier for no name
// const noNameSymbol = Symbol('no-name');

export class TierListItemFactory {

    public static makeItemWithName(name: string): TierListItem {
        return { name: name };
    }

    public static makeItemWithUrl(url: string): TierListItem {
        return { url: url };
    }
}


// =========================================================================== //

export interface TierListItem {
    name?: string;
    url?: string;
}

// literally just marker interfaces
export interface UrlTierListItem {
    url: string;
}

export interface NameTierListItem {
    name: string;
}

