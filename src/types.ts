export type BookList = {
  kind?: string,
  id?: string,
  etag?: string,
  selfLink?: string,
  volumeInfo?: VolumeInfo,
  saleInfo?: string,
  accessInfo?: string,
  searchInfo?: string,
}

// export interface AccessInfo {
//   country:                Country;
//   viewability:            Viewability;
//   embeddable:             boolean;
//   publicDomain:           boolean;
//   textToSpeechPermission: TextToSpeechPermission;
//   epub:                   Epub;
//   pdf:                    Epub;
//   webReaderLink:          string;
//   accessViewStatus:       AccessViewStatus;
//   quoteSharingAllowed:    boolean;
// }


// export interface SearchInfo {
//   textSnippet: string;
// }

export type VolumeInfo = {
  title: string;
  authors: string[];
  publishedDate: string;
  industryIdentifiers: string;
  readingModes: string;
  pageCount: number;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: string;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  subtitle?: string;
  publisher?: string;
  description?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
}

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
}



