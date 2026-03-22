import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Ellipsis } from "lucide-react";

export function Content({ item }: { item: ShelfItem }) {
  return (
    <div className="min-w-160px w-full">
      <AspectRatio ratio={14 / 9} className="rounded-lg bg-muted-foreground">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="rounded object-cover"
        />
      </AspectRatio>

      <div className="flex justify-between mt-3 content-between">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <Ellipsis />
      </div>
      <p className="mt-2">{item.subtitle}</p>
    </div>
  );
}
