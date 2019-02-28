import { ServiceItem } from "../../model/type/service-item";

export class ServiceItemFactory {

    static empty(): ServiceItem  {
        return new ServiceItem  (
                     '',  // id,
                     '',  // title,
                    [''], // shortDescriptions, 
                  false,  //  featured
                    [''], // descriptions, 
 [ {url: '', title: ''}], // tumbnails
        );
    }

    static fromObject( raw: any): ServiceItem  {
        // Here we just forward the `raw`
        return   new ServiceItem  (
          raw.id,  // id,
          raw.title,  // title,
          raw.shortDescriptions, // shortDescriptions, 
          raw.featured,// featured 
          raw.descriptions,// descriptions 
          raw.thumnails , // tumbnails
        );
      }
  
}
