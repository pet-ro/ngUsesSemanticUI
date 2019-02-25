
// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class NewsItem {
  constructor(
     public id: string,   
     public title: string,  
     public shortDescriptions: string[], 
     public featured: boolean,
     public descriptions: string[], 
     public thumbnails?: Thumbnail[],
  ) { }
}
