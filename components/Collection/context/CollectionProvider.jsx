import { createContext } from "react";

const CollectionContext = createContext({
  data: [],
  onItemClick: () => {},
  onEdit: () => {},
  onDelete: () => {},
  onCustomAction: () => {},
});

export default CollectionContext;
