import { Shelf } from "@/types/shelf.schema";
import { Item } from "../sdui/Item";
import { Heading } from "../Heading";

const itemsSizing = {
  Team: "w-[40vw]",
  Collection: "w-[80vw]",
  News: "w-[90vw]",
  Content: "w-[80vw]",
};

export function CarouselShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="w-screen">
      <div className="px-4">
        <Heading title={shelf.title} />
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4">
        {shelf.items.map((item) => (
          <div key={item.id} className="snap-start first:pl-4 last:pr-4">
            <div className={itemsSizing[item.domain]}>
              <Item item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
