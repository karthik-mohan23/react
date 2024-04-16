import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalItems, totalPacked }) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} totalPacked={totalPacked} />
    </header>
  );
}
