import React, { useState, memo, useCallback } from "react";

const InputCell = memo(({ text, onChange }) => {
  console.log(`render InputCell (text:${text})`);
  return <input type="text" value={text} onChange={onChange}></input>;
});

const Item = memo(({ item, setItem }) => {
  console.log(`render Item (id:${item.id})`, { item });
  const onChange = useCallback(
    (e) => {
      const newItem = { ...item, text: e.target.value };
      setItem(newItem);
    },
    [item, setItem]
  );
  return (
    <>
      <li>
        {item.id}:
        <InputCell text={item.text} onChange={onChange} />
      </li>
    </>
  );
});

const Items = memo(({ items, setItems }) => {
  console.log("render Items", { items });
  const setItem = useCallback(
    (item) => {
      const newItems = [...items];
      newItems[item.id - 1] = item;
      setItems(newItems);
    },
    [items, setItems]
  );
  return (
    <>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} setItem={setItem} />
        ))}
      </ul>
    </>
  );
});

const App = React.memo(() => {
  console.log("render App");
  const [cnt, setCnt] = useState(1);
  const [items, setItems] = useState([{ id: Number(cnt), text: "" }]);
  const onClick = useCallback(() => {
    setCnt(cnt + 1);
    const newItems = [...items];
    newItems.push({ id: newItems.length + 1, text: "" });
    setItems(newItems);
  }, [cnt, items]);
  return (
    <>
      {cnt}
      <br />
      <button onClick={onClick}>button</button>
      <br />
      <Items items={items} setItems={setItems} />
    </>
  );
});

export default App;
