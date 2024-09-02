import Image from "next/image";
import apiCall from "@/utils/api";
import Link from "next/link";
import "./scroll.css"
import { GridTileImage } from "@/components/ui/components/grid/tile";

type Product = {
    id: string;
    title: string;
    price: number;
    artist?:{name:string};
    design: { url: string,variant:string }[];
    types:{value:string}[];
};

const FeaturedProducts = async () => {

    let relevantProducts: Product[] = []
    try {
        let response = await apiCall("GET", "api/1/product/all");
        if (response?.products?.length > 0) {
            relevantProducts = response.products.slice(0, 10);
        }
    } catch (err) {
        console.error(err);
    }
    if (!relevantProducts?.length) return null;

    relevantProducts = [...relevantProducts, ...relevantProducts, ...relevantProducts];

    return (
            <>
            <div className=" w-full overflow-x-auto no-scrollbar pb-6 pt-1">
            <ul className="flex animate-carousel gap-4">
              {relevantProducts.map((product) => (
                <li
                  key={product.id}
                  className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                >
                  <Link
                    key={product.id}
                    href={`/product/${product.artist?.name}?productId=${product.id}&variant=${product.design[0]?.variant}&type=${product.types[0]?.value}`}
                    className="relative h-full w-full"
                  >
                    <GridTileImage
                      key={product.id}
                      alt={product.title}
                      label={{
                        title: product.title,
                        amount: product.price.toString(),
                        currencyCode: "USD"                        
                      }}
                      src={product.design[0]?.url || ""}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </>
    );
};

export default FeaturedProducts;