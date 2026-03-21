import { shelvesMock } from "@/mocks/shelves.mock";
import { ShelvesSchema, Shelf } from "@/types/shelf.schema";

const API_URL = "https://simple-test-api-s02c.onrender.com";

type DataSource = "api" | "mock";

// você pode trocar via env
const DATA_SOURCE: DataSource =
  process.env.NEXT_PUBLIC_DATA_SOURCE === "mock" ? "mock" : "api";

export async function getShelves(page = 1): Promise<Shelf[]> {
  if (DATA_SOURCE === "mock") {
    return validate(shelvesMock);
  }

  try {
    const res = await fetch(`${API_URL}/shelves?page=${page}`);

    if (!res.ok) throw new Error("API error");

    const data = await res.json();

    return validate(data);
  } catch (error) {
    console.warn("Falling back to mock data", error);

    return validate(shelvesMock);
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
