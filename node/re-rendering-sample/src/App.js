import React, { useState, memo, useCallback } from "react";

const InputCell = memo(({ text, onChange }) => {
  console.log(`render InputCell (text:${text})`);
  return <input type="text" value={text} onChange={onChange}></input>;
}, (prev, next) => JSON.stringify(prev.text) === JSON.stringify(next.text) && prev.onChange === next.onChange);

const Item = memo(({ item, setItem }) => {
  console.log(`render Item (id:${item.id})`, { item });
  const onChange = useCallback(
    (e) => {
      const newItem = {...item};
      newItem.text = e.target.value;
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
}, (prev, next) => JSON.stringify(prev.item) === JSON.stringify(next.item) && prev.setItem === next.setItem);

const Items = memo(({ items, setItems }) => {
  console.log("render Items", { items });
  const setItem = useCallback(
    (item) => {
      const newItems = items.map((item) => ({...item}));
      newItems[item.id - 1] = {...item};
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
},  (prev, next) => JSON.stringify(prev.items) === JSON.stringify(next.items));

const App = () => {
  console.log("render App");
  const [cnt, setCnt] = useState(1);
  const [items, setItems] = useState([{ id: Number(cnt), text: "" }]);
  const onClick = useCallback(() => {
    setCnt(cnt + 1);
    const newItems = items.map((item) => ({...item}));
    newItems.push({ id: items.length + 1, text: "" });
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
};

export default App;
