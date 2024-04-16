// function convertCurrency(amount: number, currency: string): string {
//   return "5";
// }

// convertCurrency(100, "INR");

//props : string
//props is an object. So to specify it we can use

// export default function Button(props: { backgroundColor: "red" }) {
//   return <div>Button </div>;
// }

// =======================
// export default function Button({
//   backgroundColor,
// }: {
//   backgroundColor: string;
//   fontSize: number;
//   pillShape: boolean;
// }) {
//   return <div>Button {backgroundColor} </div>;
// }
// =======================

type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  pillShape?: boolean;
};

export default function Button({ backgroundColor }: ButtonProps) {
  return <div>Button {backgroundColor} </div>;
}
