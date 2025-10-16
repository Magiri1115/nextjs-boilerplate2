// ボタンコンポーネント
type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children }: ButtonProps) {
  const className = variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return <button className={className}>{children}</button>;
}
