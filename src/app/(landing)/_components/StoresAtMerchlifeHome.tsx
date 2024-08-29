import apiCall from "@/utils/api";
import Link from "next/link";
import { useState } from "react";

export default async function StoresAtMerchlifeHome() {
    let stores = []
    try {
        const response = await apiCall("GET", "api/1/artist/randomArtists");
        stores = response.artist;
        console.log(stores)
    } catch (err) {
        console.error(err);
    }
    return (
        <div className="grid p-4 md:p-12 mt-4 md:mt-12 bg-white text-black">
            <div className="flex flex-col md:flex-row items-center justify-between pb-4 md:pb-12">
                <h2 className="font-normal text-3xl md:text-5xl">
                    STORES AT <b>MERCHLIFE</b>
                </h2>
                {/* <div className="flex justify-between mt-4 md:mt-0">
              <button className="px-4 py-2  text-gray-800 rounded-md"><CirclePre /></button>
              <button className="px-4 py-2  text-gray-800 rounded-md"> <CircleNext /></button>
            </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-7">
                {stores.map((store, index) => (
                    <Link key={index} href={`/store/d/${store.name.trim()}`} className="p-4 border border-gray-300 rounded-md">
                        <img className="w-full h-[531px]" src={store.banner} alt="Sellers at Merchlife" />
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {store.product.slice(0, 3).map((product, productIndex) => (
                                <Link key={productIndex} href={`/product/${store.name.replace(
                                    /\s+/g,
                                    '-'
                                )}?productId=${product.id}&variant=${product.design[0]?.variant}&type=${product.types[0].value}`}
                                    className="w-32 overflow-hidden">
                                    <img className="z-0 w-full h-full object-cover" src={product.design[0] ? product.design[0].url : "/default-product-image.jpg"}      width={200}
                height={340} alt="Product One" />
                                </Link>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}