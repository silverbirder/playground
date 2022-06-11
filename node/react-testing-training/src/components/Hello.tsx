import React from "react";

export type HelloProps = {
  name?: string;
};
export const Hello: React.FC<HelloProps> = ({ name }) => {
  if (name) {
    return <>Hello, {name}!</>;
  } else {
    return <>Hey, stranger</>;
  }
};
