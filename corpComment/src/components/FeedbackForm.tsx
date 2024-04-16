import { useState } from "react";

export default function FeedbackForm() {
  const [feedbackText, setFeedbackText] = useState("");

  const feedbackTextLength = 150 - feedbackText.length;

  const handleFeedbackTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (feedbackTextLength < 1) {
      return;
    }
    setFeedbackText(e.target.value);
  };

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="blah"
        spellCheck={false}
        value={feedbackText}
        onChange={handleFeedbackTextChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{feedbackTextLength}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
