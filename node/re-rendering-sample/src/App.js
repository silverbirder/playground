import React, { useState, memo, useCallback } from "react";

const isItemEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item);
};

const InputCell = memo(({ text, onChange }) => {
  console.log(`render InputCell (text:${text})`);
  return <input type="text" value={text} onChange={onChange}></input>;
});

const Item = memo(({ item, updateItems }) => {
  console.log(`render Item (id:${item.id})`, { item });
  const onChange = useCallback(
    (e) => {
      const newItem = { ...item, text: e.target.value };
      updateItems(newItem);
    },
    [item, updateItems]
  );
  return (
    <li>
      {item.id}:
      <InputCell text={item.text} onChange={onChange} />
    </li>
  );
}, isItemEqual);

const Items = memo(({ items, updateItems }) => {
  console.log("render Items", { items });
  return (
    <ul>
      {items.map((item) => {
        return <Item item={item} key={item.id} updateItems={updateItems} />;
      })}
    </ul>
  );
});

function App() {
  console.log("render App");
  const [cnt, setCnt] = useState(1);
  const [items, setItems] = useState([{ id: Number(cnt), text: "" }]);
  const onClick = () => {
    setCnt(cnt + 1);
    const newItems = [...items];
    newItems.push({ id: newItems.length + 1, text: "" });
    setItems(newItems);
  };
  const updateItems = useCallback(
    (propItem) => {
      const newItems = items.map((item) => {
        if (item.id === propItem.id) {
          return propItem;
        } else {
          return item;
        }
      });
      setItems(newItems);
    },
    [items]
  );
  return (
    <>
      {cnt}
      <br />
      <button onClick={onClick}>button</button>
      <br />
      <Items items={items} updateItems={updateItems} />
    </>
  );
}

export default App;
