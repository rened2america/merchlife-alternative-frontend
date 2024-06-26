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
import { CustomCheckbox } from "@/components/ui/components/customCheckbox.tsx/customCheckbox";
import { AddCart } from "@/components/ui/components/addCart/addCart";
import { NavbarHeader } from "@/components/ui/components/navbar/navbar";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "6 PMers Black T-shirt M",
        quantity: quantity,
        size: "M",
        priceId: "price_1Obn0uGkWb1Ap7UJIBqBLI6J",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "6 PMers Black T-shirt L",
        quantity: quantity,
        size: "L",
        priceId: "price_1Obn1jGkWb1Ap7UJ7vwJeI3q",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "6 PMers Black T-shirt XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Obn2TGkWb1Ap7UJuFOHYk22",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "6 PMers Black T-shirt 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1Obn3tGkWb1Ap7UJqFWrKbOh",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "6 PMers Black T-shirt 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1Or4zaGkWb1Ap7UJVbF2IQPF",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "6 PMers Black T-shirt 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1Obn5nGkWb1Ap7UJ4S3RLtod",
        url: "/product_two.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "6 PMers Black T-shirt 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1Obn6ZGkWb1Ap7UJBxLUC9TQ",
        url: "/product_two.jpg",
      };
    }
    return {
      name: "6 PMers Black T-shirt S",
      quantity: quantity,
      size: "S",
      priceId: "price_1ObmzgGkWb1Ap7UJ2TgTuQoL",
      url: "/product_two.jpg",
    };
  };

  return (
    <>
      <main
        style={{
          backgroundColor: "#171717",
          fontFamily: "'Inter',sans-serif",
        }}
        className="grid h-screen justify-center"
      >
        <div
          style={{
            width: "80%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 gap-10 justify-self-center"
        >
          <Image src="/product_two.jpg" width="350" />
          <div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 text-xl">6 PMers Black T-shirt</div>
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
              // placeholder="1"
              defaultValue="1"
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
