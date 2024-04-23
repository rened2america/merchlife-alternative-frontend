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
  products: any;
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
        width: `${size === "half" ? "300px" : "600px"}`,
        height: `${size === "half" ? "300px" : "630px"}`,
      }}
    >
      <Link
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
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
              style={{
                borderRadius: "16px",
              }}
              width="1000"
              height="170"
              src={urlImagen}
              alt="nose"
            />
          ) : (
            <Image
              style={{
                borderRadius: "16px",
              }}
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
        <Link href={products[0].urlRedirect}>
          {size === "half" ? (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="100"
              height="170"
              src={products[0].img}
              alt="nose"
            />
          ) : (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="200"
              height="340"
              src={products[0].img}
              alt="nose"
            />
          )}
        </Link>
        <Link href={products[1].urlRedirect}>
          {size === "half" ? (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="100"
              height="170"
              src={products[1].img}
              alt="nose"
            />
          ) : (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="200"
              height="340"
              src={products[1].img}
              alt="nose"
            />
          )}
        </Link>
        <Link href={products[2].urlRedirect}>
          {size === "half " ? (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="100"
              height="170"
              src={products[2].img}
              alt="nose"
            />
          ) : (
            <Image
              style={{
                borderRadius: "16px",
              }}
              width="200"
              height="340"
              src={products[2].img}
              alt="nose"
            />
          )}
        </Link>
      </div>
    </div>
  );
};
