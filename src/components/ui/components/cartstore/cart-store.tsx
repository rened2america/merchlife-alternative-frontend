"use client";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export const CartStore = ({
  urlBg,
  fUrlImg,
  sUrlImg,
  tUrlImg,
  urlRedirect,
}: {
  urlBg: string;
  fUrlImg: string;
  sUrlImg: string;
  tUrlImg: string;
  urlRedirect: string;
}) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateRows: "auto",
        gap: "16px",
        borderRadius: "16px",
        border: "1px solid hsla(0,0%,100%,.07)",
        background: "hsla(0,0%,100%,.1)",
        width: "500px",
        height: "400px",
      }}
    >
      <Link
        href={urlRedirect}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          height: "200px",
        }}
      >
        <figure
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Image
            style={{
              borderRadius: "16px",
            }}
            width="1000"
            height="170"
            src={urlBg}
            alt="nose"
          />
        </figure>
      </Link>
      <div
        style={{
          gridTemplateColumns: "repeat(3,1fr)",
          display: "grid",
          gap: "16px",
          justifyItems: "center",
        }}
      >
        <Link href={urlRedirect}>
          <Image
            style={{
              borderRadius: "16px",
            }}
            width="100"
            height="170"
            src={fUrlImg}
            alt="nose"
          />
        </Link>
        <Link href={urlRedirect}>
          <Image
            style={{
              borderRadius: "16px",
            }}
            width="100"
            height="170"
            src={sUrlImg}
            alt="nose"
          />
        </Link>
        <Link href={urlRedirect}>
          <Image
            style={{
              borderRadius: "16px",
            }}
            width="100"
            height="170"
            src={tUrlImg}
            alt="nose"
          />
        </Link>
      </div>
    </div>
  );
};
