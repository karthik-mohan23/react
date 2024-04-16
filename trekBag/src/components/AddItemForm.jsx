import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }
    const newItem = {
      id: Date.now(),
      packed: false,
      name: itemText,
    };
    console.log(newItem);
    handleAddItem(newItem);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <Button handleClick>Add to list</Button>
    </form>
  );
}
