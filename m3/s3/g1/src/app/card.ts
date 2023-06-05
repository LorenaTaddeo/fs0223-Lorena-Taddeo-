export class Card {

    albumId!: number;
    title!: string;
    url!: string ;
    thumbnailUrl!: string;
    id: number = 0


    constructor(albumId: number, title: string, url: string,
        thumbnailUrl: string, id: number = 0){
        this.albumId = albumId;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
        this.id = id;
    }
}
