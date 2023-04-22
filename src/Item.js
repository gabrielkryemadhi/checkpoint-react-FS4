import React, { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  const [text, setText] = useState(item.text);
  const [count, setCount] = useState(item.text.length);

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleUpdate = () => {
    onUpdate(item.id, text);
    setCount(text.length);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setCount(value.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <div className="item">
      <div className="count">{count}</div>
      <div className="text">
        <div
          contentEditable
          onBlur={handleUpdate}
          onKeyDown={handleKeyDown}
          onInput={handleChange}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="timestamp">
          Posted at {new Date(item.timestamp).toUTCString()}
        </div>
      </div>
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
