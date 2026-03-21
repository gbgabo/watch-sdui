import { Shelf } from "@/types/shelf.schema";
import Image from "next/image";

export function ListShelf({ shelf }: { shelf: Shelf }) {
  return (
    <section className="px-4">
      <h2 className="text-lg font-bold mb-2">{shelf.title}</h2>

      <ul className="flex flex-col gap-3">
        {shelf.items.map((item) => (
          <li key={item.id} className="flex gap-3">
            <Image
              src={item.image_url}
              className="w-20 h-16 object-cover rounded"
              alt={shelf.title}
              width={500}
              height={500}
            />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
