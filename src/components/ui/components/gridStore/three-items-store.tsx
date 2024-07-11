import Link from "next/link";
import { CartStoreHome } from "./cart-store-home";
import apiCall from "@/utils/api";

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

interface SimplifiedDesign {
  url: string;
}

interface SimplifiedProduct {
  title: string;
  design: SimplifiedDesign[];
}

interface SimplifiedArtist {
  id: number;
  name: string;
  banner: string;
  product: SimplifiedProduct[];
}

export async function ThreeItemGridStores() {
  let sellers: SimplifiedArtist[] = [];

  try {
    const response = await apiCall("GET", "api/1/artist/randomArtists");
  
    // Simplify the response to the required structure
    sellers = response.artist.map((artist: any, index:number) => ({
      id: artist.id,
      name: artist.name,
      banner: artist.banner,
      product: artist.product.map((product: any) => ({
        title: product.title,
        design: product.design.map((design: any) => ({
          url: design.url,
        })),
      })),
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <section className="text-white bg-black">
      <div className="mb-4 mt-8 p-4 text-4xl font-extrabold text-white bg-black">
        Sellers at Merchlife
      </div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-8 md:grid-rows-2">
        {sellers.length > 0 ? (
          sellers.map((seller, index) => (
            <ThreeItemGridItemStore
              key={seller.id}
              size={index == 0 ? "full" : "half"}
              urlRedirect={`/store/${seller.name.replace(/\s+/g, '')}`} // Dynamically create the store URL
              urlImagen={seller.banner}
              products={seller.product.slice(0, 3).map((product) => ({
                img: product.design[0] ? product.design[0].url : "/default-product-image.jpg", // Fallback to a default image if none exists
                urlRedirect: `/product/${product.title.replace(/\s+/g, '-')}`, // Dynamically create the product URL
              }))}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}