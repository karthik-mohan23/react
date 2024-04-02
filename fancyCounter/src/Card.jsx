import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const isDisabled = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        let newCount = count + 1;
        if (newCount < 6) {
          return setCount(newCount);
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // now when count changes and react adds another event
    //  it will run this cleanup function first.
    // if we don't return this cleanup function then the
    // browser will get start to slow down the update of
    // count value and gets stuck after some time.
    // Bcoz the events starts to pile up.
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div>
      <Title isDisabled={isDisabled} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} isDisabled={isDisabled} />
    </div>
  );
}
