import { useState } from "react";
import { Statistics } from "../components/Statistics";
import { TextInput } from "../components/TextInput";
import { StringReplacement } from "../components/StringReplacement";

// Define the HomePage component
export const HomePage = () => {
  // State to manage the main text input
  const [text, setText] = useState<string>("");

  // State to manage the highlighted text for replacement
  const [highlightedText, setHighlightedText] = useState<string>("");

  // Function to handle changes to the text in the input field
  const handleTextChange = (newText: string) => {
    setText(newText);
    setHighlightedText(newText);
  };

  // Function to handle text replacement and update both text and highlighted text
  const handleTextReplace = (newText: string, highlighted: string) => {
    setText(newText);
    setHighlightedText(highlighted);
  };

  // Render the UI
  return (
    <div className="p-5 space-y-4">
      {/* Heading */}
      <h1 className="text-3xl m-4 font-bold">Real-Time Text Analysis</h1>{" "}
      {/* TextInput component for entering text, passing current text and highlighted text */}
      <TextInput
        text={text}
        onChange={handleTextChange}
        highlightedText={highlightedText}
      />
      {/* Statistics component for displaying unique word count and character count */}
      <Statistics text={text} setText={setText} />
      {/* StringReplacement component for handling string search and replace */}
      <StringReplacement text={text} onReplace={handleTextReplace} />
    </div>
  );
};
