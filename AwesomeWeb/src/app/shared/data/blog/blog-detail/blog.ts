import { Paragraph } from './paragraph';

export class Blog {
    constructor(
        public id: string,
        public date: string,
        public title: string,
        public details: Paragraph[],
        public name: string,
        public like: string,
        public comment: string,
        public section: 'Comments: ',
        public commentSection: Comment[]) {
    }
}
