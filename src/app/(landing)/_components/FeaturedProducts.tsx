import Image from "next/image";
import apiCall from "@/utils/api";
import Link from "next/link";

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
            relevantProducts = response.products.slice(0, 4);
        }
    } catch (err) {
        console.error(err);
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {relevantProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.artist?.name}?productId=${product.id}&variant=${product.design[0]?.variant}&type=${product.types[0]?.value}`} className="border border-black flex flex-col items-stretch group">
                        <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                            {product.design && product.design[0] ? (
                                <Image
                                    className="object-cover h-full w-80 hover:transition-all group-hover:scale-110 duration-500"
                                    src={product.design[0].url}
                                    alt={product.title}
                                    width={320}
                                    height={320}
                                    quality={100}
                                />
                            ) : (
                                <div className="flex justify-center items-center w-full h-full bg-gray-200">
                                    Image not available
                                </div>
                            )}
                        </div>
                        <div className="bg-black text-white p-4 w-full flex-grow flex flex-col justify-between">
                            <div>
                                <h5 className="text-2xl md:text-3xl font-light">{product.title}</h5>
                            </div>
                            <div>
                                <p className="mt-2 md:mt-4">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;

