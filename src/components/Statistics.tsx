// Define the props for the Statistics component
interface StatisticsProps {
  text: string;
  setText: (text: string) => void;
}

// Define the Statistics component to display word and character statistics
export const Statistics = ({ text, setText }: StatisticsProps) => {
  // Split the paragraph into an array of words, filtering out empty strings
  const wordsArray: string[] = text.split(/\s+/).filter((word) => word !== "");

  // Normalize words: Convert to lowercase and remove punctuation characters
  const lowerCaseWords = wordsArray.map((word) =>
    word.toLowerCase().replace(/[.,!?]/g, "")
  );

  // Use a Set to find and store unique words
  const uniqueWords = new Set(lowerCaseWords);

  // Count the number of characters excluding spaces and punctuation
  const charCount = text.replace(/[^a-zA-Z0-9]/g, "").length;

  // Function to clear the textarea content
  const clearTextArea = () => {
    // Set the text to an empty string to clear the input
    setText("");
  };

  // Render the statistics and a button to clear the textarea
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg space-y-4 m-2">
      {/* Display the number of unique words */}
      <p className="text-lg font-medium text-gray-700">
        Number of unique words:{" "}
        <span className="font-bold text-blue-500">{uniqueWords.size}</span>
      </p>

      {/* Display the character count, excluding spaces and punctuation */}
      <p className="text-lg font-medium text-gray-700">
        Character Count (excluding spaces and punctuation):{" "}
        <span className="font-bold text-blue-500">{charCount}</span>
      </p>

      {/* Button to clear all text from the textarea */}
      <button
        onClick={clearTextArea}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
      >
        Clear All
      </button>
    </div>
  );
};
