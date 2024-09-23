import { useState } from "react";
import { Statistics } from "../components/Statistics";
import { TextInput } from "../components/TextInput";

export const HomePage = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText: string) => {
    setText(newText);
  };
  return (
    <>
      <h2>Message</h2>
      <TextInput text={text} onChange={handleTextChange} />
      <Statistics text={text} setText={setText} />
    </>
  );
};
