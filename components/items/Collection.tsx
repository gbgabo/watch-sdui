import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export function Collection({ item }: { item: ShelfItem }) {
  return (
    <div className="min-w-160px w-[80vw] md:w-md">
      <AspectRatio ratio={2.66 / 4} className="rounded-lg bg-muted-foreground">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>

      <h3 className="font-bold mt-2">{item.title}</h3>
    </div>
  );
}
