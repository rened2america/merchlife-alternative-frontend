"use client";
import { Basket } from "@/components/ui/components/icons/Basket";
import useStore from "@/state/store";
import Link from "next/link";

export const CartCount = () => {
  const { products } = useStore((state) => {
    //@ts-ignore
    return { products: state.products };
  });
  return (
    <Link
      className="p-1.5 bg-[#F3F3F3] relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg"
      href="/cart"
    >
        <Basket />
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{products.length}</div>
    </Link>
  );
};