import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("text-3xl", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-white text-black",
    },
    defaultVariant: {
      variant: "primary",
    },
  },
});

type Props = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
