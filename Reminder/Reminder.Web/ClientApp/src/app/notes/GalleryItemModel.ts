export class GalleryItemModel {
    constructor(public id?: number,
                public imagePath?: string,
                public thumbnail?: string,
                public isVideo?: boolean,
                public videoPath?: string,
                public landscape?: boolean,
                public noteId?: number) { }
  }
  