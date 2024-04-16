import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const options = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handlePacked,
  totalItems,
}) {
  const [selectedOption, setSelectedOption] = useState(options);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (selectedOption === "packed") {
          return b.packed - a.packed;
        } else if (selectedOption === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, selectedOption]
  );

  return (
    <ul className="item-list">
      {!totalItems && <EmptyView />}
      {totalItems === 0 ? null : (
        <section className="sorting">
          <Select
            defaultValue={selectedOption[0]}
            onChange={(option) => setSelectedOption(option.value)}
            options={options}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          {...item}
          handleDeleteItem={handleDeleteItem}
          handlePacked={handlePacked}
        />
      ))}
    </ul>
  );
}

function Item({ id, name, packed, handleDeleteItem, handlePacked }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => handlePacked(id)}
        />
        {name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
