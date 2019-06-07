import { GalleryItemModel } from './GalleryItemModel';

export class NoteModel {
  constructor(public id?: number,
              public description?: string,
              public editDate?: Date,
              public creationDate?: Date,
              public galleryItems?: GalleryItemModel[]) { }
}
