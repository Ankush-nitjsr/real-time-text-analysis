import { useState } from "react";
import { Statistics } from "../components/Statistics";
import { TextInput } from "../components/TextInput";
import { StringReplacement } from "../components/StringReplacement";

export const HomePage = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleTextReplace = (newText: string) => {
    setText(newText);
  };
  return (
    <>
      <h2>Message</h2>
      <TextInput text={text} onChange={handleTextChange} />
      <Statistics text={text} setText={setText} />
      <StringReplacement text={text} onReplace={handleTextReplace} />
    </>
  );
};
