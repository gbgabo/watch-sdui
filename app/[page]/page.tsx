import { getShelves } from "@/services/shelves.datasource";
import { ShelfRenderer } from "@/components/sdui/ShelfRenderer";
import { notFound } from "next/navigation";

interface Props {
  params: {
    page: string;
  };
}

export default async function Page({ params }: Props) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }

  const shelves = await getShelves(pageNumber);

  if (!shelves || shelves.length === 0) {
    notFound();
  }

  return (
    <main className="py-4 max-w-4xl m-auto">
      <ShelfRenderer shelves={shelves} />
    </main>
  );
}
