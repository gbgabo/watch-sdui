import { getDemo } from "@/services/shelves.datasource";
import { ShelfRenderer } from "@/components/sdui/ShelfRenderer";
import { notFound } from "next/navigation";

export default async function Page() {
  const shelves = await getDemo();

  if (!shelves || shelves.length === 0) {
    notFound();
  }

  return (
    <main className="py-4 max-w-4xl m-auto">
      <ShelfRenderer shelves={shelves} />
    </main>
  );
}
