// src/GridBoard.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './GridBoard.css';

function GridBoard({ items, setItems, selectItem }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (item) => {
      setItems([...items, { ...item, id: Date.now(), x: 0, y: 0 }]);
    },
  }));

  return (
    <div ref={drop} className="grid-board">
      {items.map(item => (
        <div
          key={item.id}
          className={`grid-item ${item.type} ${item.isSelected ? 'selected' : ''}`}
          style={{ gridColumn: item.x, gridRow: item.y }}
          onClick={() => selectItem(item.id)}
        >
          {item.type}
        </div>
      ))}
    </div>
  );
}

export default GridBoard;
