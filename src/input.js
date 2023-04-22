import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export function Input() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [sortTimestampAsc, setSortTimestampAsc] = useState(true);
  const [sortTextAsc, setSortTextAsc] = useState(true);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleSave() {
    const newItem = {
      text: inputText,
      id: items.length + 1,
      timestamp: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setInputText("");
    document.getElementById("inputText").focus();
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdate(id, newText) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  }

  function handleSortTimestamp() {
    setItems((prevItems) =>
      sortTimestampAsc
        ? [...prevItems].sort((a, b) => a.timestamp - b.timestamp)
        : [...prevItems].sort((a, b) => b.timestamp - a.timestamp)
    );
    setSortTimestampAsc((prev) => !prev);
  }

  function handleSortText() {
    setItems((prevItems) =>
      sortTextAsc
        ? [...prevItems].sort((a, b) => a.text.localeCompare(b.text))
        : [...prevItems].sort((a, b) => b.text.localeCompare(a.text))
    );
    setSortTextAsc((prev) => !prev);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          id="inputText"
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <button onClick={handleSortTimestamp}>Sort by Time</button>
        <button onClick={handleSortText}>Sort by Text</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Char Count</th>
            <th>Text Content</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

