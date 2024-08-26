"use client";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export const CartStoreHome = ({
  size,
  urlRedirect,
  urlImagen,
  products,
}: {
  size: string;
  urlRedirect: string;
  urlImagen: string;
  products: { img: string; urlRedirect: string }[];
}) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateRows: "auto",
        gap: "16px",
        border: "1px solid hsla(0,0%,100%,.07)",
        background: "hsla(0,0%,100%,.1)",
        width: `${size === "half" ? "300px" : "600px"}`,
        height: `${size === "half" ? "300px" : "550px"}`,
      }} 
    >
      <Link
        style={{
          position: "relative",
          overflow: "hidden",
          height: `${size === "half" ? "100px" : "300px"}`,
        }}
        href={urlRedirect}
      >
        <figure
          style={
            size === "half"
              ? {
                position: "absolute",
                width: "100%",
              }
              : {
                position: "absolute",
                width: "100%",
                top: "0px",
                backgroundColor: "black",
              }
          }
        >
          {size === "half" ? (
            <Image
              width="1000"
              height="170"
              src={urlImagen}
              alt="nose"
            />
          ) : (
            <Image
              width="1000"
              height="300"
              src={urlImagen}
              alt="nose"
            />
          )}
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
        {products.slice(0, 3).map((product, index) => (
          <Link key={index} href={product.urlRedirect}>
            {size === "half" ? (
              <img
                alt="Product"
                className="z-0 w-full h-full object-cover"
                src={product.img}
                width={100}
                height={170}
                // quality={100}
                style={{
                  // minHeight: "170px",
                  backgroundColor: "#e5e5e5",
                }}
              />
            ) : (
              <img
                alt="Product"
                className="z-0 w-full h-full object-cover"
                src={product.img}
                width={200}
                height={340}
                // quality={100}
                style={{
                  // minHeight: "340",
                  backgroundColor: "#e5e5e5",

                }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
