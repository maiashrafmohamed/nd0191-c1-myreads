export interface IBook {
    title: string;
    authors: string[];
    imageLinks: ImageLinks;
    id: string;
    shelf: string;
  }
   
  interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
  }
