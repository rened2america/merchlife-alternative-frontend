"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import apiCall from "@/utils/api";
import BeatLoader from "react-spinners/BeatLoader";

type Product = {
    id: string;
    title: string;
    price: number;
    design?: { url: string }[];
};

const FeaturedProducts = () => {

    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchFeaturedProducts = useCallback(async () => {
        try {
            let response = await apiCall("GET", "api/1/product/all");
            if (response?.products?.length > 0) {
                let relevantProducts = response.products.slice(0, 4);
                setFeaturedProducts(relevantProducts);
            }
        } catch (err) {
            setError("Failed to fetch products.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <BeatLoader />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="border border-black flex flex-col items-stretch">
                            <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                                {product.design && product.design[0] ? (
                                    <Image
                                        className="object-cover h-full w-full"
                                        src={product.design[0].url}
                                        alt={product.title}
                                        width={500}
                                        height={500}
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
                        </div>
                    ))}
                </div>


            )}
        </div>
    );
};

export default FeaturedProducts;

