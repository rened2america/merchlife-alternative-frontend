import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ size, value }: { size: any; value: any }) => {
  return (
    <Checkbox
      aria-label={size}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex gap-4">
        {size}
        <div className="flex flex-col">
          <span className="text-tiny text-default-500">Size</span>
        </div>
      </div>
    </Checkbox>
  );
};
