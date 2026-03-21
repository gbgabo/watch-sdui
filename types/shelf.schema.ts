import { z } from "zod";

export const ShelfItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  image_url: z.url(),
  domain: z.enum(["Content", "Team", "News", "Collection"]),
});

export const ShelfSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  layout: z.enum(["Carousel", "Banner", "List"]),
  position: z.number(),
  items: z.array(ShelfItemSchema),
});

export const ShelvesSchema = z.array(ShelfSchema);

// Type inferido automaticamente
export type Shelf = z.infer<typeof ShelfSchema>;
export type ShelfItem = z.infer<typeof ShelfItemSchema>;
