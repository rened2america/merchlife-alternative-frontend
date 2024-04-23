import { GridTileImage } from "./../grid/tile";
import Link from "next/link";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: any;
  size: "full" | "half";
  priority?: boolean;
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
        href={item.urlRedirect}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items'
  // });

  const homepageItems = [
    {
      featuredImage: {
        url: "/product_two.jpg",
      },
      title: "6 PMers T-shirt Black",
      urlRedirect: "/product/6-PMers-Black-T-shirt",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
    {
      featuredImage: {
        url: "/adam/classicLogoGrey.jpg",
      },
      title: "Adam Krum Classic T-shirt Grey",
      urlRedirect: "/product/Adam-Krum-Pocket-Classic-Grey",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
    {
      featuredImage: {
        url: "/adam/classicLogoSand.jpg",
      },
      title: "Adam Krum Classic T-shirt Sand",
      urlRedirect: "/product/Adam-Krum-Pocket-Classic-Sand",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
    {
      featuredImage: {
        url: "/product_one.jpg",
      },
      title: "Re-Social White T-shirt",
      urlRedirect: "/product/Re-Social-White-T-shirt",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
    {
      featuredImage: {
        url: "/2A/2AAfWhite.jpg",
      },
      title: "2A AF Tee White",
      urlRedirect: "/product/2A-AF-White",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
  ];

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [
    firstProduct,
    secondProduct,
    thirdProduct,
    fourthProduct,
    fifthProduct,
  ] = homepageItems;

  return (
    <section>
      <div className="mt-8 p-4 text-4xl font-extrabold text-white">
        {" "}
        Stores at Merchlife
      </div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 pt-4 md:grid-cols-8 md:grid-rows-2">
        <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={fourthProduct} />
        <ThreeItemGridItem size="half" item={fifthProduct} />
      </div>
    </section>
  );
}
