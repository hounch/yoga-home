"use client";

import { clsx } from "clsx";
import Image from "next/image";

type ClassSubProps = {
  title: string;
  cost: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ClassSub = ({
  title,
  cost,
  className,
  ...props
}: ClassSubProps) => {
  return (
    <article
      className={clsx(
        "bg-[#859974] rounded-[20px] h-[250px] w-[373px] text-center",
        className
      )}
      {...props}
    >
      <h3 className="mx-auto text-[32px] text-[#EEE5DC]">{title}</h3>
      <div className="flex items-center text-[#EEE5DC] text-[32px] font-medium mb-[21px]">
        <div className="flex items-left ml-[20px] mb-[21px]">{cost}</div>
        <div className="flex items-right mb-[21px] mr-[39px]">
          <svg
            width="42"
            height="63"
            viewBox="0 0 42 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4074 43.2873C17.5892 42.7775 19.3367 33.6663 25.734 35.6415C32.1313 37.6166 31.9568 46.4096 26.9495 49.3402C20.7441 52.9719 11.468 49.6075 11.468 39.2095C11.468 30.7991 11.6386 14.297 11.468 7.03348M2 17.5263C2 17.5263 2 34.3672 2 42.7775C2 52.1436 8.6532 61 21.7678 61C27.7172 61 33.2188 57.878 36.6094 52.9719C40 48.0659 40 42.2041 40 38.5086V29.1426C40 27.6771 40 28.9123 40 26.3246M30.2761 6.01404V29.1426M20.7441 2V28.3143"
              stroke="#EEE5DC"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};
