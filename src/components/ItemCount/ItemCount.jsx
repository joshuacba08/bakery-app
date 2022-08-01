import React, { useState } from "react";

import './ItemCount.scss';

const ItemCount = ({ item, onAdd }) => {
  const [count, setCount] = useState(1);

  const addCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__controlls">
        <button
          className="button button-primary"
          onClick={() => {
            addCount(-1);
          }}
          disabled={count === 1 ? true : false}
        >
          -
        </button>
        <div>{count}</div>
        <button
          className="button button-primary"
          onClick={() => {
            addCount(1);
          }}
          disabled={count === item.stock ? true : false}
        >
          +
        </button>
      </div>
      <button
        className="button button-primary"
        onClick={() => {
          onAdd(item, count);
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
