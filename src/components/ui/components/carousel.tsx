import Link from "next/link";
import { GridTileImage } from "./grid/tile";

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
  const products = [
    {
      featuredImage: {
        url: "/2A/2AAfWhite.jpg",
      },
      urlRedirect: "/product/2A-AF-White",
      title: "2A AF Tee White",
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
      urlRedirect: "/product/Adam-Krum-Pocket-Classic-Grey",
      title: "Adam Krum Classic T-shirt Grey",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
    {
      featuredImage: {
        url: "/product_two.jpg",
      },
      urlRedirect: "/product/6-PMers-Black-T-shirt",
      title: "6 PMers T-shirt Black",
      priceRange: {
        maxVariantPrice: {
          amount: "24.50",
          currencyCode: "USD",
        },
      },
    },
  ];
  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product) => (
          <li
            key={Date.now()}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              key={Date.now()}
              href={product.urlRedirect}
              className="relative h-full w-full"
            >
              <GridTileImage
                key={Date.now()}
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
