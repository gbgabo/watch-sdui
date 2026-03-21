import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";

export function Card({ item }: { item: ShelfItem }) {
  return (
    <div className="min-w-160px">
      <Image
        src={item.image_url}
        alt={item.title}
        className="rounded-lg object-cover w-full h-40"
        width={500}
        height={500}
      />
      <h3 className="text-sm font-semibold mt-2">{item.title}</h3>
      <p className="text-xs text-gray-400">{item.subtitle}</p>
    </div>
  );
}
