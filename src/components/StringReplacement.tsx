import { useState } from "react";

interface StringReplacementProps {
  text: string;
  onReplace: (newText: string) => void;
}

export const StringReplacement = ({ text, onReplace }: StringReplacementProps) => {
  const [search, setSearch] = useState<string>("");
  const [replace, setReplace] = useState<string>("");

  const handleReplace = () => {
    if (search.trim()) {
      // Global replacement
      const regex = new RegExp(search, "g");
      onReplace(text.replace(regex, replace));

      // Clear input fields after replacement
      setSearch("");
      setReplace("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Replace with..."
        value={replace}
        onChange={(e) => setReplace(e.target.value)}
      />
      <button onClick={handleReplace}>Replace All</button>
    </div>
  );
};
