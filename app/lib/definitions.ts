//file contains type definitions for data.
//describes the shape of the data and what data type each property should accept.

export type Artwork = {
    id: string;
    image: string;
    caption: string;
}

export type Links = {
  name: string;
  href: string;
  icon: string;
  state: string;
}
