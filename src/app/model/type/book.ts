import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class Book {
    constructor (
        public isbn: string,
        publictitle: string,
        publicauthors: string[],
        publicpublished: Date,
        publicubtitle?: string,
        public rating?: number,
        public tumbnails?: Thumbnail[],
        public description?: string
    ) { }
}
