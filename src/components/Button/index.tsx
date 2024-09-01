import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: "100%",
      height: "42px",
      backgroundColor: "#81259D",
      color: "#FFF",
      border: "1px solid #81259D",
      borderRadius: "21px",
      cursor: "pointer",
      opacity: disabled ? 0.6 : 1,
    }}
  >
    {title}
  </button>;
};

export default Button;
