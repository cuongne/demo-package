import { useState } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  initialValue?: number;
  onValueChange?: (value: number) => void;
}

const Button: React.FC<ButtonProps> = ({ variant, initialValue = 0, onValueChange, ...props }) => {
  const [count, setCount] = useState(initialValue);
  const buttonStyle = () => {
    const propStyle = props.style ?? {};
    if (props.disabled) return propStyle;
    if (variant === 'primary') return { 
      borderColor: '#6366F1', 
      backgroundColor: '#6366F1', 
      color: '#FAFAFA', 
      ...propStyle 
    };
    if (variant === 'secondary') return { 
      borderColor: '#6366F1', 
      backgroundColor: '#FAFAFA', 
      color: '#6366F1', 
      ...propStyle 
    };
    return propStyle;
  };

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);
    onValueChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = count - 1;
    setCount(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button {...props} style={buttonStyle()} onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button {...props} style={buttonStyle()} onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Button;
