import { useItemsStore } from "../stores/itemStore";

export default function Counter({ totalItems, totalPacked }) {
  const items = useItemsStore((state) => state.items);

  return (
    <p>
      <b>{totalPacked} </b>/ {items.length} items packed
    </p>
  );
}
