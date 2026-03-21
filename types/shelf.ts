export type ShelfLayout = "Carousel" | "Banner" | "List";

export type ShelfDomain = "Content" | "Teams" | "News" | "Collection";

export interface ShelfItem {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  domain: ShelfDomain;
}

export interface Shelf {
  id: number;
  title: string;
  subtitle: string;
  layout: ShelfLayout;
  position: number;
  items: ShelfItem[];
}
