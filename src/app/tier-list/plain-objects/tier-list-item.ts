// // unique identifier for no name
// const noNameSymbol = Symbol('no-name');

export class TierListItemFactory {

    public static makeItemWithName(name: string): TierListItem {
        return { name: name };
    }

    public static makeItemWithUrl(url: string): TierListItem {
        return { url: url };
    }

    public static makeItem(name: string, url: string): TierListItem {
        return {
            name: name,
            url: url
        }
    }
}


// =========================================================================== //

export interface TierListItem {
    name?: string;
    url?: string;
}
