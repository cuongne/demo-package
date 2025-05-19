import React, { useState } from 'react';

interface ButtonProps {
  initialValue?: number;
  onValueChange?: (value: number) => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  initialValue = 0,
  onValueChange,
  className = '',
}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrease = () => {
    const newValue = count + 1;
    setCount(newValue);
    onValueChange?.(newValue);
  };

  const handleDecrease = () => {
    const newValue = count - 1;
    setCount(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className={`button-container ${className}`}>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};
