import { ShelfItem } from "@/types/shelf.schema";
import { Collection } from "../items/Collection";
import { News } from "../items/News";
import { Team } from "../items/Team";

export const itemComponentMap = {
  Collection: Collection,
  News: News,
  Team: Team,
  Content: News,
} as const;

interface Props {
  item: ShelfItem;
}

export function Item({ item }: Props) {
  const Component = itemComponentMap[item.domain];

  if (!Component) {
    console.warn(`Unknown item: ${item.domain}`);
    return null;
  }

  return <Component item={item} />;
}
