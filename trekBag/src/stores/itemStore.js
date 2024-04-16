import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

// create takes a function that will return as a state(object)
// create function will get access to setter function
// this set function can access previous state
export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItem) => {
        set(({ items }) => [...items, newItem]);
      },
      deleteItem: (id) => {
        set(({ items }) => {
          const newItems = items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      togglePacked: (id) => {
        set(({ items }) =>
          items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          )
        );
      },
      removeAllItems: () => {
        console.log("remove all items");
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        console.log("reset");
        set({ items: initialItems });
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set(({ items }) => {
          const newItems = items.map((item) => ({ ...item, packed: false }));
          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
