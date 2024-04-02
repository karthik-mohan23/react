import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// ===========2nd approach===========
export default function CountButtons({ setCount, isDisabled }) {
  return (
    <div>
      <CountButton setCount={setCount} type="minus" isDisabled={isDisabled} />
      <CountButton setCount={setCount} type="plus" isDisabled={isDisabled} />
    </div>
  );
}

function CountButton({ type, setCount, isDisabled }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        let nextValue = prev - 1;
        if (nextValue < 0) {
          return 0;
        }
        return nextValue;
      } else {
        let nextCount = prev + 1;
        if (nextCount >= 5) {
          return 5;
        }
        return nextCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {type === "minus" ? (
        <MinusIcon className="minus-btn-icon" />
      ) : (
        <PlusIcon className="plus-btn-icon" />
      )}
    </button>
  );
}

//====================== one approach ==============
// export default function CountButtons({ setCount }) {
//   const handleIncrement = () => {
//     setCount((prev) => prev + 1);
//   };
//   const handleDecrement = () => {
//     setCount((prev) => prev - 1);
//   };

//   return (
//     <div>
//       <CountButton handleClick={handleDecrement}>
//         <MinusIcon className="minus-btn-icon" />
//       </CountButton>
//       <CountButton handleClick={handleIncrement}>
//         <PlusIcon className="plus-btn-icon" />
//       </CountButton>
//     </div>
//   );
// }

// function CountButton({ handleClick, children }) {
//   return <button onClick={handleClick}>{children}</button>;
// }

// --------===============Original ================
// export default function CountButtons({ setCount }) {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             setCount((prev) => prev - 1);
//           }}>
//           <MinusIcon className="minus-btn-icon" />
//         </button>
//         <button
//           onClick={() => {
//             setCount((prev) => prev + 1);
//           }}>
//           <PlusIcon className="plus-btn-icon" />
//         </button>
//       </div>
//     );
//   }
