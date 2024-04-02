import { useState } from "react";
import ButtonBasic from "./ButtonBasic";
import CountBasic from "./CountBasic";

export default function ProjectOne() {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <CountBasic number={number} />
      <ButtonBasic setNumber={setNumber} />
      {/* <ButtonBasic setNumber={setNumber} number={number} /> */}
    </div>
  );
}
