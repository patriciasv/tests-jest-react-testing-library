import { ReactNode } from "react";

interface ButtonProps {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ disabled, children, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: disabled ? "gray" : "green",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
