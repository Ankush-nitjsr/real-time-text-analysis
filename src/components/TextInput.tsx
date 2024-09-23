interface TextInputProps {
  text: string;
  onChange: (text: string) => void;
}

export const TextInput = ({ text, onChange }: TextInputProps) => {
  return (
    <textarea
      value={text}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your text here..."
    />
  );
};
