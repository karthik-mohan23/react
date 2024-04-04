export default function Stats({ text }) {
  const numberOfWords = text.split(" ").length - 1;
  const numberOfCharacters = text.length;

  return (
    <section className="stats">
      <Stat statsText={numberOfWords} heading={"Words"} />
      <Stat statsText={numberOfCharacters} heading={"Characters"} />
      <Stat statsText={280 - numberOfCharacters} heading={"Instagram"} />
      <Stat statsText={2200 - numberOfCharacters} heading={"Facebook"} />
    </section>
  );
}

function Stat({ statsText, heading }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${statsText < 0 && "stat__number--limit"}
         
        `}>
        {statsText}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
