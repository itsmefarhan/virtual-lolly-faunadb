import React from "react"
import "../styles/Button.css"

export interface ButtonProps {
  label: string
  onClickFunc: () => void
}
const Button: React.FC<ButtonProps> = ({ label, onClickFunc }) => {
  return <button onClick={onClickFunc}>{label}</button>
}
export default Button
