import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/constants";
import { useItemsStore } from "../stores/itemStore";

export default function App() {
  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem("items")) || initialItems
  // );

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);
  const items = useItemsStore((state) => state.items);

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleClearAllItems = () => {
    setItems([]);
  };

  const handlePacked = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };
  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalItems={totalItems} totalPacked={totalPacked} />

        <ItemList
          items={items}
          totalItems={totalItems}
          handleDeleteItem={handleDeleteItem}
          handlePacked={handlePacked}
        />

        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
