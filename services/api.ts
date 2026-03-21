import { Shelf } from "@/types/shelf";

const API_URL = "https://simple-test-api-s02c.onrender.com"; // substituir

export async function getShelves(page = 1): Promise<Shelf[]> {
  const res = await fetch(`${API_URL}/shelves?page=${page}`, {
    next: { revalidate: 60 }, // cache ISR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch shelves");
  }

  return res.json();
}
