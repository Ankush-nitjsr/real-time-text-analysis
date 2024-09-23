interface StatisticsProps {
  text: string;
  setText: (text: string) => void;
}

export const Statistics = ({ text, setText }: StatisticsProps) => {
  // Split the paragraph into words, filtering out empty strings
  const wordsArray: string[] = text.split(/\s+/).filter((word) => word !== "");

  // Normalize words: convert to lowercase and remove punctuation
  const lowerCaseWords = wordsArray.map((word) =>
    word.toLowerCase().replace(/[.,!?]/g, "")
  );

  // Use a Set to find unique words
  const uniqueWords = new Set(lowerCaseWords);

  const charCount = text.replace(/[^a-zA-Z0-9]/g, "").length;

  // Define function to remove input string from text area
  const clearTextArea = () => {
    // Make text area empty
    setText("");
  };

  return (
    <div>
      <p>Number of unique words:{uniqueWords.size}</p>
      <p>Character Count (excluding spaces and punctuation): {charCount}</p>
      <button onClick={clearTextArea}>Clear all</button>
    </div>
  );
};
