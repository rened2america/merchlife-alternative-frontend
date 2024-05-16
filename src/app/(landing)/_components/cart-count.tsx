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
      className="p-1.5 bg-[#F3F3F3]"
      href="/cart"
    >
        <Basket />
    </Link>
  );
};
