// File: src/components/ui/Button.tsx
"use client";

import { clsx } from "clsx";

type ButtonProps = {
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "solid",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        " rounded-[20.56px] font-medium text-[14px] tracking-[1%] transition-all content-center align-middle cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-[#494542]-500",
        variant === "solid" &&
          "bg-[#859974] text-[#EEE5DC] hover:bg-[#859974]-600",
        variant === "outline" && [
          "border-0.8 border border-solid border-[#494542] text-[#494542]",
          "hover:bg-black-50/40",
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
