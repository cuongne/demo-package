/// <reference types="react" />
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}
declare const Button: React.FC<ButtonProps>;

export { Button };
