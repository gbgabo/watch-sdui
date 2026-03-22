import { Shelf } from "@/types/shelf.schema";
import { Collection } from "@/components/items/Collection";

export function CarouselShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="w-screen">
      <h2 className="text-lg uppercase font-bold font-heading text-white mb-2 px-6">
        {shelf.title}
      </h2>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
        {shelf.items.map((item) => (
          <div key={item.id} className="snap-start">
            <Collection item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
