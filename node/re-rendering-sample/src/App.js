import React, { useState } from "react";

const Item = ({ text, uuid, setItem }) => {
  console.log(`render Item (id:${uuid})`, { text, uuid });
  const onChange = (e) => setItem({ uuid, text: e.target.value });
  return <input type="text" value={text} onChange={onChange}></input>;
};

const Items = ({ items, setItems }) => {
  console.log("render Items", { items });
  const setItem = (newItem, index) => {
    const newItems = items.slice();
    newItems[index] = newItem;
    setItems(newItems);
  };
  return (
    <>
      {items.map((item, index) => (
        <Item
          text={item.text}
          uuid={item.uuid}
          key={item.uuid}
          setItem={(newItem) => setItem(newItem, index)}
        />
      ))}
    </>
  );
};

const App = () => {
  console.log("render App");
  const [items, setItems] = useState(
    [...Array(1000)].map(() => ({ text: "", uuid: Math.random() }))
  );
  const onClick = () => {
    const newItems = items.slice();
    newItems.push({ text: "", uuid: Math.random() });
    setItems(newItems);
  };
  return (
    <>
      {items.length}
      <button onClick={onClick}>button</button>
      <br />
      <Items items={items} setItems={setItems} />
    </>
  );
};

export default App;
