import { getShelves } from "@/services/api.ts";
import { ShelfRenderer } from "@/components/sdui/ShelfRenderer";

export default async function Home() {
  const shelves = await getShelves(1);

  return (
    <main className="py-4 max-w-4xl m-auto">
      <ShelfRenderer shelves={shelves} />
    </main>
  );
}
