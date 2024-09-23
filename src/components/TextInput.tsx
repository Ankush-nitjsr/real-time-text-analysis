// Define the props for the TextInput component
interface TextInputProps {
  text: string;
  onChange: (text: string) => void;
  highlightedText: string;
}

// Define the TextInput component for handling text input and displaying highlighted text
export const TextInput = ({
  text,
  onChange,
  highlightedText,
}: TextInputProps) => {
  // Handle changes in the textarea by passing the new value to the parent component
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update the text value in the parent component
    onChange(e.target.value);
  };

  return (
    <div className="m-2">
      {/* Textarea input where users can type text */}
      <textarea
        value={text}
        onChange={handleChange}
        rows={5}
        cols={50}
        placeholder="Type your text here..."
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display the highlighted text with replaced words */}
      <div
        className="whitespace-pre-wrap my-4 border border-gray-300 p-4 rounded-md"
        // Use dangerouslySetInnerHTML to render highlighted text
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </div>
  );
};
