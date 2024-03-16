import React from "react";

export const InputMedia: React.FC<{
  // Media is a complex browser object we can't send to Node while testing.
  onChange: (media: any) => void;
}> = ({ onChange }) => {
  return (<></>) as any;
};
