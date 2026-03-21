import { Shelf } from "@/types/shelf";
import { Card } from "@/components/ui/Card";

export function CarouselShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="px-4">
      <h2 className="text-lg font-bold mb-2">{shelf.title}</h2>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {shelf.items.map((item) => (
          <div key={item.id} className="snap-start">
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
