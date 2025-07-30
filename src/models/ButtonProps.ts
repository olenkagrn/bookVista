export default interface ButtonProps {
  buttonText?: string;
  children?: React.ReactNode;
  className: string;
  type: "primary" | "transparent";
}
