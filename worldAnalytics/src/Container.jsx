import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    setWarningText("");
    let newText = e.target.value.replace(/\s+/g, " ");
    // remove empty space if first word is empty
    if (newText.startsWith(" ")) {
      newText = newText.replace(/^\s+/, "");
    }
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed");
      newText = newText.replace("@", "");
    }
    setText(newText);
  };
  return (
    <main className="container">
      <Textarea
        handleChange={handleChange}
        text={text}
        warningText={warningText}
      />
      <Stats text={text} />
    </main>
  );
}
