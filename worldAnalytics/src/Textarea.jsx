import Warning from "./Warning";

export default function Textarea({ handleChange, warningText, text }) {
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
