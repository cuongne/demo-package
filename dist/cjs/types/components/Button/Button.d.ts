/// <reference types="react" />
import './Button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    initialValue?: number;
    onValueChange?: (value: number) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
