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
        "rounded-[1.4rem] font-medium text-[14px] tracking-[1%] transition-all h-[2.85rem] flex justify-center items-center",
        "content-center align-middle cursor-pointer",
        variant === "solid" && [
          "bg-[#859974] text-[#EEE5DC]",
          "hover:bg-[#859974]-600",
        ],
        variant === "outline" && [
          "border border-palebrown-500 text-palebrown-500",
          "hover:bg-black/10",
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
