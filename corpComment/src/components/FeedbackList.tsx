import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItem, setFeedbackItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      setIsError("");

      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();

        setFeedbackItem(data.feedbacks);
      } catch (error: unknown) {
        setIsLoading(false);
        setIsError("Something went wrong.");
        //network error, not 2xx, or JSON parsing error
        console.log(error.message);
      }

      setIsLoading(false);
    };
    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {isError && <ErrorMessage message={isError} />}
      {feedbackItem?.map((item) => (
        <FeedbackItem key={item.id} feedbackItem={item} />
      ))}
    </ol>
  );
}
