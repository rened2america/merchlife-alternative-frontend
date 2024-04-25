"use client";
import { Avatar, Chip, Divider, Input, Select, SelectItem, User } from "@nextui-org/react";
import Link from "next/link";
import {
  // Card,
  Button,
} from "@nextui-org/react";
// import useStore from "../state/store";
import useStore from "@/state/store";
import { CardContent, Card } from "@/components/ui/card";
export default function Creators() {
  const { products, removeFromCart } = useStore((state) => {
    //@ts-ignore

    return { products: state.products, removeFromCart: state.removeFromCart };
  });
  return (
    <main
      style={{
        backgroundColor: "#171717",
        fontFamily: "'Inter',sans-serif",
      }}
      className="h-screen"
    >
      <div className="grid justify-center">
        {products.map((product: any) => {
          return (
            <>
              <Card>
                <div className="flex w-96 justify-between gap-2 p-4">
                  <h2>{product.name}</h2>
                  <div>Size: {product.size}</div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-tiny text-default-500">Quantity</span>
                    {product.quantity}
                  </div>
                  <button color="danger" onClick={() => removeFromCart(product.name)}>
                    Delete
                  </button>
                </div>
              </Card>
              <Divider className="my-4" />
            </>
          );
        })}
        <button
          onClick={async () => {
            const response = await fetch("api/checkout/", {
              method: "post",
              body: JSON.stringify({
                itineraryId: "ok",
                products: products,
              }),
            });
            const checkout = await response.json();
            const checkoutLink = checkout.result.url;
            window.location.href = checkoutLink;
          }}
        >
          Buy
        </button>
      </div>
    </main>
  );
}
