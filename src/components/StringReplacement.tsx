import { useState } from "react";

// Define interface for the props accepted by the StringReplacement component
interface StringReplacementProps {
  text: string; // The text in which search and replace will be performed
  onReplace: (newText: string, highlightedText: string) => void; // Function to handle the replacement and highlighting
}

// Define the StringReplacement component
export const StringReplacement = ({
  text,
  onReplace,
}: StringReplacementProps) => {
  // State to track the search string entered by the user
  const [search, setSearch] = useState<string>("");

  // State to track the replace string entered by the user
  const [replace, setReplace] = useState<string>("");

  // Function to handle the replacement of the search string with the replace string
  const handleReplace = () => {
    // Ensure the search field is not empty
    if (search.trim()) {
      // Create a regular expression to find all occurrences of the search string (global search, case-sensitive)
      const regex = new RegExp(search, "g");

      // Replace all occurrences of the search string in the text with the replace string
      const newText = text.replace(regex, replace);

      // Replace matched text with a highlighted version using a span tag for visual indication
      const highlighted = text.replace(
        regex,
        (match) => `<span class="bg-yellow-200">${match}</span>`
      );

      // Call the onReplace function passed from the parent component, sending the updated text and highlighted text
      onReplace(newText, highlighted);

      // Clear the search and replace input fields after the operation is performed
      setSearch("");
      setReplace("");
    }
  };

  return (
    <div className="space-x-4 m-2">
      {/* Input field for the search string */}
      <input
        type="text"
        placeholder="Search for..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      {/* Input field for the replace string */}
      <input
        type="text"
        placeholder="Replace with..."
        value={replace}
        onChange={(e) => setReplace(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      {/* Button to trigger the replace function */}
      <button
        onClick={handleReplace}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Replace All
      </button>
    </div>
  );
};
