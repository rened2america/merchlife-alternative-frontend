"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProduct {
  name: string;
  value: number;
  FrontImage: string;
  BackImage: string;
  redirect: string;
}

export const CardProduct = ({ name, FrontImage, BackImage, redirect }: CardProduct) => {
  const [image, setImage] = useState(FrontImage);
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        backgroundColor: "#E6E6E6",
      }}
      onMouseEnter={() => setImage(BackImage)}
      onMouseLeave={() => setImage(FrontImage)}
    >
      <Image width={300} height={300} src={image} alt="back black" />
      <div
        style={{
          backgroundColor: "#E6E6E6",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            padding: "8px 16px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            2A AF T-shirt White
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            $24.5
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            padding: "16px 16px",
            position: "relative",
            height: "72px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "36px",
              width: "36px",
              border: "1px solid black",
              borderStyle: "dotted",
              borderRadius: "20px",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              display: "grid",
              alignContent: "center",
              marginLeft: "16px",
            }}
          >
            SHOP NOW -
          </div>
        </div>
      </div>
    </div>
  );
};
