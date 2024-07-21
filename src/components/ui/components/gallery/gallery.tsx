"use client"
import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ list, defaultValue }: { list: string[]; defaultValue: string }) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active ? active: defaultValue}
          width={350}
          height={450}
          quality={100}
          alt="Gallery"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {list.map((imgelink, index) => (
          <div key={index}>
            <Image
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              src={imgelink}
              width={100}
              height={150}
              quality={100}
              alt="MinGallery"
              onClick={() =>setActive(imgelink)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
