"use client";
import { Shelf } from "@/types/shelf.schema";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

export function BannerShelf({ shelf }: { shelf: Shelf }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = shelf.items.length;

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true, // Enable infinite loop
        }}
        className="w-full"
      >
        <CarouselContent>
          {shelf.items.map((item, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={3 / 4} className="bg-muted-foreground">
                {" "}
                <Image
                  src={item.image_url}
                  alt={item.title}
                  className="h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-4 left-0 text-white z-10 w-full flex flex-col items-center gap-7 mb-4">
                  <h2 className="text-4xl text-center font-heading font-semibold uppercase tracking-normal">
                    {item.title}
                  </h2>
                  <Button className="bg-blue-700 px-10 py-8 text-xl rounded-sm">
                    <Play className="w-40 h-40" /> Watch Now
                  </Button>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex gap-4 mx-auto w-fit">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 rounded-full transition-all",
              current === index
                ? "bg-white scale-125 w-6"
                : "bg-white/50 hover:bg-white/75 w-3",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
