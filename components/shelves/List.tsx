import { Shelf } from "@/types/shelf.schema";
import { Item } from "../sdui/Item";
import { Heading } from "../Heading";

export function ListShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="px-4">
      <Heading title={shelf.title} />

      <ul className="flex flex-col gap-8">
        {shelf.items.map((item) => (
          <li key={item.id} className="w-full">
            <Item item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
