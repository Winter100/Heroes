import React, { ComponentProps, forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ ...props }, ref) => {
    return <input ref={ref} {...props} />;
  }
);

export default Input;

Input.displayName = 'Input';
