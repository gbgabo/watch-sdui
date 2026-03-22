import { Shelf } from "@/types/shelf.schema";
import { Item } from "../sdui/Item";

export function ListShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="px-4">
      <h2 className="text-lg font-bold font-heading mb-2">{shelf.title}</h2>

      <ul className="flex flex-col gap-3">
        {shelf.items.map((item) => (
          <li key={item.id} className="mx-auto">
            <Item item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
