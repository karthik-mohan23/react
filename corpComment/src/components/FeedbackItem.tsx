import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: FeedbackItem,
}: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        {FeedbackItem.upvoteCount}
      </button>
      <div>
        <p>{FeedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{FeedbackItem.companyName}</p>
        <p>{FeedbackItem.text}</p>
      </div>
      <p>{FeedbackItem.daysAgo}d</p>
    </li>
  );
}
