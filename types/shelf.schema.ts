import { z } from "zod";

export const ShelfItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  image_url: z.string().refine(
    (value) => {
      // Check if the URL is relative (doesn't start with a protocol)
      if (!/^(https?:\/\/|mailto:)/i.test(value)) {
        // Try to create a URL using a dummy base. If it succeeds, it's valid.
        try {
          new URL(value, "https://dummybase.com");
          return true;
        } catch {
          return false;
        }
      }
      // Optionally, if you also want to allow absolute URLs:
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    {
      message: "Invalid relative or absolute URL",
    },
  ),
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
