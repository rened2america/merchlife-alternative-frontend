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
        className="relative block aspect-square w-full"
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
  variant: string
}

interface SimplifiedProduct {
  id:number;
  title: string;
  design: SimplifiedDesign[];
  types: [{value: string}]
}

interface SimplifiedArtist {
  id: number;
  name: string;
  banner: string;
  product: SimplifiedProduct[];
}

export async function ThreeItemGridStores() {
  let stores: SimplifiedArtist[] = [];

  try {
    const response = await apiCall("GET", "api/1/artist/randomArtists");

    // Simplify the response to the required structure
    stores = response.artist;
  } catch (err) {
    console.error(err);
  }
  console.log("stores: ", stores)
  console.log("products: ", stores[0]?.product[0])
  return (
    <section className="text-white bg-black">
      <div className="p-4 text-3xl md:text-5xl font-normal md:p-12">
        STORES AT <b>MERCHLIFE</b>
      </div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-1">
        {stores.length > 0 && (
          stores.map((seller, index) => (
            <ThreeItemGridItemStore
              key={seller.id}
              size={index == 0 ? "full" : "half"}
              urlRedirect={`/store/d/${seller.name.trim()}`} // Dynamically create the store URL
              urlImagen={seller.banner}
              products={seller.product.slice(0, 3).map((product) => ({
                img: product.design[0] ? product.design[0].url : "/default-product-image.jpg", // Fallback to a default image if none exists
                urlRedirect: `/product/${seller.name.replace(
                  /\s+/g,
                   '-'
                  )}?productId=${product.id}&variant=${
                    product.design[0]?.variant
                  }&type=${product.types[0].value}`}))}
            />
          ))
        )}
      </div>
    </section>
  );
}