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
      className={`p-5 grid border border-opacity-20 bg-opacity-10 bg-white  ${size === "half"
        ? "w-full md:w-[300px] h-72"
        : " md:w-[600px] md:h-[630px] xl:h-[650px] lg:w-[600px] lg:h-[650px] xl:w[600px] "
        }`}
    >
      <Link
        className={`relative overflow-hidden ${size === "half" ? "h-24" : "h-72"
          }`}
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

          <Image
            className="w-full h-full"
            width="1000"
            height={size === "half" ? 170 : 300}
            layout="responsive"
            src={urlImagen}
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
