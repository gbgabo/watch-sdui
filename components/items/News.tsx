import { ShelfItem } from "@/types/shelf.schema";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Ellipsis } from "lucide-react";

export function News({ item }: { item: ShelfItem }) {
  const datetime = new Date();
  return (
    <div className="min-w-160px w-full flex gap-4">
      <div className="w-1/2">
        <AspectRatio
          ratio={1.77 / 1}
          className="rounded-lg bg-muted-foreground"
        >
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="rounded-lg object-cover"
          />
        </AspectRatio>
      </div>

      <div className="flex justify-between content-between flex-col">
        <time className="font-extralight" dateTime={datetime.toISOString()}>
          {datetime.toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <h3 className="font-bold text-lg line-clamp-2">{item.title}</h3>
        <Ellipsis />
      </div>
    </div>
  );
}
