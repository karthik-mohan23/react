const ButtonBasic = ({ setNumber }) => {
  return (
    <button
      onClick={
        () => setNumber((prevState) => prevState + 1)
        // ()=> setNumber(number + 1)
      }
      className="border border-black">
      +
    </button>
  );
};
export default ButtonBasic;
