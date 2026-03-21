import { Shelf } from "@/types/shelf";
import Image from "next/image";

export function BannerShelf({ shelf }: { shelf: Shelf }) {
  const item = shelf.items[0];

  if (!item) return null;

  return (
    <section className="px-4">
      <div className="relative">
        <Image
          src={item.image_url}
          alt={item.title}
          className="rounded-xl w-full h-48 object-cover"
          width={500}
          height={500}
        />

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-sm">{item.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
