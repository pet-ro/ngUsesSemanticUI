import { Thumbnail } from "./thumbnail";

export interface IProductItem {
     id: string,   
     title: string,  
     shortDescriptions: string[],
     inStock?: string,
     featured?: boolean,
     descriptions?: string[],
     priceInEuro?: string,
     thumbnails?: Thumbnail[],
}
