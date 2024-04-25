"use client";
import { CartIcon } from "@/components/ui/components/icons/CartIcon";
import useStore from "@/state/store";
import Link from "next/link";

export const CartCount = () => {
  const { products } = useStore((state) => {
    //@ts-ignore
    return { products: state.products };
  });
  return (
    <Link
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      href="/cart"
    >
      <CartIcon />
      {products.length}
    </Link>
  );
};
