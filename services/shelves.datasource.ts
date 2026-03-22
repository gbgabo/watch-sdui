import { shelvesMock } from "@/mocks/shelves.mock";
import { ShelvesSchema, Shelf } from "@/types/shelf.schema";

const API_URL = "https://simple-test-api-s02c.onrender.com";

export async function getDemo(): Promise<Shelf[]> {
  return validate(shelvesMock);
}

export async function getShelves(page = 1): Promise<Shelf[] | null> {
  try {
    const res = await fetch(`${API_URL}/shelves?page=${page}`);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return validate(data);
  } catch (error) {
    console.warn(error);

    return [];
  }
}

function validate(data: unknown): Shelf[] {
  const parsed = ShelvesSchema.safeParse(data);

  if (!parsed.success) {
    console.error(parsed.error);
    throw new Error("Invalid data format");
  }

  return parsed.data;
}
