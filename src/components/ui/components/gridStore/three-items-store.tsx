"use client";

import Link from "next/link";
import { CartStoreHome } from "./cart-store-home";

function ThreeItemGridItemStore({
  size,
  urlRedirect,
  urlImagen,
  products,
}: {
  size: "full" | "half";
  urlRedirect: string;
  urlImagen: string;
  products: any;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={urlRedirect}
      >
        <CartStoreHome
          size={size}
          urlRedirect={urlRedirect}
          urlImagen={urlImagen}
          products={products}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGridStores() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items'
  // });

  return (
    <section>
      <div className="mb-4 mt-8 p-4 text-4xl font-extrabold text-white">
        {" "}
        Sellers at Merchlife
      </div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-8 md:grid-rows-2">
        <ThreeItemGridItemStore
          size="full"
          urlRedirect="/store/The6PMersSwagShop"
          urlImagen={"/6PMers.jpg"}
          products={[
            {
              img: "/product_two.jpg",
              urlRedirect: "/product/6-PMers-Black-T-shirt",
            },
            {
              img: "/product_three.jpg",
              urlRedirect: "/product/6PM-Somewhere-Black-T-shirt",
            },
            {
              img: "/product_one.jpg",
              urlRedirect: "/product/Re-Social-White-T-shirt",
            },
          ]}
        />
        <ThreeItemGridItemStore
          size="half"
          urlRedirect="/store/The6PMersSwagShop"
          urlImagen={"/6PMers.jpg"}
          products={[
            {
              img: "/product_two.jpg",
              urlRedirect: "/product/6-PMers-Black-T-shirt",
            },
            {
              img: "/product_three.jpg",
              urlRedirect: "/product/6PM-Somewhere-Black-T-shirt",
            },
            {
              img: "/product_one.jpg",
              urlRedirect: "/product/Re-Social-White-T-shirt",
            },
          ]}
        />
        <ThreeItemGridItemStore
          size="half"
          urlRedirect="/store/AdamKrum"
          urlImagen={"/adam/ADAMB.png"}
          products={[
            {
              img: "/adam/classicLogoGrey.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Classic-Grey",
            },
            {
              img: "/adam/classicLogoWhite.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Classic-White",
            },
            {
              img: "/adam/classicLogoGreen.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Classic-Green",
            },
          ]}
        />
        <ThreeItemGridItemStore
          size="half"
          urlRedirect="/store/2AAmericanFreedom"
          urlImagen={"/2A/2AFB.png"}
          products={[
            {
              img: "/2A/2AAfWhite.jpg",
              urlRedirect: "/product/2A-AF-White",
            },
            {
              img: "/2A/AFEagleWhite.jpg",
              urlRedirect: "/product/American-Freedom-Eagle-White",
            },
            {
              img: "/2A/2ndAmendmentAFWhite.jpg",
              urlRedirect: "/product/2nd-Amendment-American-Freedom-White",
            },
          ]}
        />
        <ThreeItemGridItemStore
          size="half"
          urlRedirect="/store/AdamKrum"
          urlImagen={"/adam/ADAMB.png"}
          products={[
            {
              img: "/adam/classicLogoBlack.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Classic-Black",
            },
            {
              img: "/adam/classicLogoSand.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Classic-Sand",
            },
            {
              img: "/adam/starLogoBlack.jpg",
              urlRedirect: "/product/Adam-Krum-Pocket-Star-Black",
            },
          ]}
        />
      </div>
    </section>
  );
}
