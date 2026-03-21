import { Shelf } from "@/types/shelf.schema";
import { CarouselShelf } from "../shelves/Carousel";
import { BannerShelf } from "../shelves/Banner";
import { ListShelf } from "../shelves/List";

export const shelfComponentMap = {
  Carousel: CarouselShelf,
  Banner: BannerShelf,
  List: ListShelf,
} as const;

interface Props {
  shelves: Shelf[];
}

export function ShelfRenderer({ shelves }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {shelves
        .sort((a, b) => a.position - b.position)
        .map((shelf) => {
          const Component = shelfComponentMap[shelf.layout];

          if (!Component) {
            console.warn(`Unknown layout: ${shelf.layout}`);
            return null;
          }

          return <Component key={shelf.id} shelf={shelf} />;
        })}
    </div>
  );
}
