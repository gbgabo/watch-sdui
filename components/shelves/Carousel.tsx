import { Shelf } from "@/types/shelf.schema";
import { Item } from "../sdui/Item";

export function CarouselShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="w-screen">
      <h2 className="text-lg uppercase font-bold font-heading text-white mb-2 px-6">
        {shelf.title}
      </h2>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4">
        {shelf.items.map((item) => (
          <div key={item.id} className="snap-start">
            <div className="w-[80vw]">
              <Item item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
