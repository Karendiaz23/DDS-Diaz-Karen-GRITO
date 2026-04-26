import { useState } from "react";

type Item = {
  id: string;
  name: string;
  done: boolean;
};

export const useListaCompras = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);

    setText("");
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, done: !it.done } : it
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return {
    items,
    text,
    setText,
    addItem,
    toggleItem,
    removeItem,
  };
};