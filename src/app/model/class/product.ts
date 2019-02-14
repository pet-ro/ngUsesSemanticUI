import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class Product {
    constructor(
        public isbn: string,
        public title: string,
        public authors: string[],
        public published: Date,
        public subtitle?: string,
        public rating?: number,
        public tumbnails?: Thumbnail[],
        public description?: string
    ) { }
}
