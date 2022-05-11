import React, { useState, memo, useCallback } from "react";

const Item = memo(({ item, updateItems }) => {
  console.log(`render Item (id:${item.id})`, { item });
  const onChange = useCallback(
    (e) => {
      const newItem = { ...item };
      newItem.text = e.target.value;
      updateItems(newItem);
    },
    [item, updateItems]
  );
  return (
    <li>
      {item.id}:
      <input type="text" value={item.text} onChange={onChange}></input>
    </li>
  );
});

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
  const [items, setItems] = useState([{ id: cnt, text: "" }]);
  const onClick = useCallback(() => {
    setCnt(cnt + 1);
    setItems([...items, { id: cnt + 1, text: "" }]);
  }, [cnt, items]);
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
