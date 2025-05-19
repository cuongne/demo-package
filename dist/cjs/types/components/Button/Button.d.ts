import React from 'react';
interface ButtonProps {
    initialValue?: number;
    onValueChange?: (value: number) => void;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
