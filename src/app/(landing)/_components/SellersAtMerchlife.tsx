"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import apiCall from "@/utils/api";
import BeatLoader from "react-spinners/BeatLoader";

type Product = {
    design: { url: string }[];
};

type Seller = {
    id: string;
    name: string;
    price: number;
    banner?: string;
    product: Product[];
};

const SellersAtMerchlife = () => {
    const [sellers, setSellers] = useState<Seller[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchSellers = useCallback(async () => {
        try {
            let response = await apiCall("GET", "api/1/artist/all");
            // Sellers = Stores = Artists
            setSellers(response.artist);
        } catch (err) {
            setError("Failed to fetch products.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSellers();
    }, [fetchSellers]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="grid p-4 md:p-12 bg-black text-white">
            <div className="flex flex-col md:flex-row items-center justify-between pb-4 md:pb-12">
                <h2 className="font-normal text-3xl md:text-5xl">
                    SELLERS AT <b>MERCHLIFE</b>
                </h2>
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <BeatLoader />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-7">
                        {sellers.map((seller, index) => (
                            <div key={index} className="p-4 border border-zinc-800 rounded-md bg-zinc-900">
                                <Image
                                    className="w-full h-[300px] object-cover"
                                    src={seller.banner ? seller.banner : "/6PMers.jpg"}
                                    alt={seller.name}
                                    quality={100}
                                    width={1000}
                                    height={300}
                                />

                                <div className="grid grid-cols-3 gap-4 pt-4">
                                    {seller.product.slice(0, 3).map((product, idx) => (
                                        <Image
                                            key={idx}
                                            className="w-full object-cover"
                                            src={product.design[0] ? product.design[0].url : "/product_two.jpg"}
                                            alt={`Product ${idx + 1}`}
                                            quality={100}
                                            width={200}
                                            height={300}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SellersAtMerchlife;
