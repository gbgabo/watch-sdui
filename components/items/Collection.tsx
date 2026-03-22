import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Ellipsis } from "lucide-react";

export function Collection({ item }: { item: ShelfItem }) {
  return (
    <div className="min-w-160px w-full">
      <AspectRatio ratio={2.66 / 4} className="rounded-lg bg-muted-foreground">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>

      <div className="flex justify-between mt-3 content-between">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <Ellipsis />
      </div>
    </div>
  );
}
