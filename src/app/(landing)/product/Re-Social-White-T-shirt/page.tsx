"use client";
import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  CheckboxGroup,
  Divider,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { CustomCheckbox } from "@/app/components/customCheckbox.tsx/customCheckbox";
import { AddCart } from "@/app/components/addCart/addCart";
import { NavbarHeader } from "@/app/components/navbar/navbar";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "Re Social White T-shirt M",
        quantity: quantity,
        size: "M",
        priceId: "price_1ObnHRGkWb1Ap7UJBkNW4hHZ",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Re Social White T-shirt L",
        quantity: quantity,
        size: "L",
        priceId: "price_1ObnHoGkWb1Ap7UJbOZphPQy",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Re Social White T-shirt XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1ObnICGkWb1Ap7UJFBEm5YV7",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Re Social White T-shirt 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1ObnIYGkWb1Ap7UJ0kbtdrYB",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Re Social White T-shirt 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1ObnJ2GkWb1Ap7UJHnzX7nOf",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Re Social White T-shirt 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1ObnJLGkWb1Ap7UJnaC3hbL9",
        url: "/product_one.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Re Social White T-shirt 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1ObnJkGkWb1Ap7UJzTaVkVAW",
        url: "/product_one.jpg",
      };
    }
    return {
      name: "Re Social White T-shirt S",
      quantity: quantity,
      size: "S",
      priceId: "price_1ObqY4GkWb1Ap7UJwhPMnJF3",
      url: "/product_one.jpg",
    };
  };

  return (
    <>
      <main
        style={{
          backgroundColor: "#171717",
          fontFamily: "'Inter',sans-serif",
        }}
        className="grid justify-center h-screen"
      >
        <div
          style={{
            width: "80%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 justify-self-center gap-10"
        >
          <Image src="/product_one.jpg" width="350" />
          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">Re Social T-shirt White</div>
              <div className="text-lg">$24.5</div>
            </div>
            <Divider className="my-4" />

            <div>
              <CheckboxGroup
                label="Select size"
                value={selected}
                //@ts-ignore
                onChange={(data) => setSelected([data[1]])}
                classNames={{
                  base: "w-full",
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  <CustomCheckbox value="s" size="S" />
                  <CustomCheckbox value="m" size="M" />
                  <CustomCheckbox value="l" size="L" />
                  <CustomCheckbox value="xl" size="XL" />
                  <CustomCheckbox value="2xl" size="2XL" />
                  <CustomCheckbox value="3xl" size="3XL" />
                  <CustomCheckbox value="4xl" size="4XL" />
                  <CustomCheckbox value="5xl" size="5XL" />
                </div>
              </CheckboxGroup>
            </div>
            <Divider className="my-4" />

            <div className="text-medium text-foreground-500">Quantity</div>
            <Input
              type="number"
              placeholder="1"
              labelPlacement="outside"
              className="mt-2"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Divider className="my-4" />
            <AddCart product={findProduct()} />
          </div>
        </div>
      </main>
    </>
  );
}
