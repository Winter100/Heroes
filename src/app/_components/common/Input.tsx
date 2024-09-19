import React, { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

export default Input;

Input.displayName = "Input";
