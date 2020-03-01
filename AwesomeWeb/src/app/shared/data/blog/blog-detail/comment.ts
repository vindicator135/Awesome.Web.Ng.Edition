export class Comment {
    constructor(
        public id: number,
        public img: string,
        public name: string,
        public date: string,
        public description: string,
        public replyTag: string) {}
}
