import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Ellipsis } from "lucide-react";

export function Team({ item }: { item: ShelfItem }) {
  return (
    <div className="min-w-320px w-[70vw] flex flex-col items-center">
      <AspectRatio
        ratio={1}
        className="rounded-full bg-muted-foreground w-[70vw] h-auto"
      >
        <AspectRatio ratio={1} className="m-auto w-3/5">
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-contain"
          />
        </AspectRatio>
      </AspectRatio>

      <h3 className="font-bold mt-2">{item.title}</h3>
      <Ellipsis />
    </div>
  );
}
