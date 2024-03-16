import React from "react";
import { InputMedia } from "./input-media";

export const InputMediaForTest: React.FC<{
  onMediaChange: (mediaName: string) => void;
}> = ({ onMediaChange }) => {
  // Instead of sending a complex `media` object to the test, send the media name.
  return <InputMedia onChange={(media) => onMediaChange(media.name)} />;
};
// Export more stories here.
