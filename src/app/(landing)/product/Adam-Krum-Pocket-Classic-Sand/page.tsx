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
import { Gallery } from "@/app/components/gallery/gallery";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "Adam Krum Pocket Classic Sand M",
        quantity: quantity,
        size: "M",
        priceId: "price_1Oon4BGkWb1Ap7UJ0U0ZHWmO",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Pocket Classic Sand L",
        quantity: quantity,
        size: "L",
        priceId: "price_1Oon5ZGkWb1Ap7UJfpuZ7z3W",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Pocket Classic Sand XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Oon6iGkWb1Ap7UJK1out9j8",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Pocket Classic Sand 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1Oon8rGkWb1Ap7UJUVjbFc8w",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Pocket Classic Sand 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OonAmGkWb1Ap7UJAPlx0G3w",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Pocket Classic Sand 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OonDZGkWb1Ap7UJOHngSU38",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Pocket Classic Sand 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OonEFGkWb1Ap7UJWR1A9CJN",
        url: "/adam/classicLogoSand.jpg",
      };
    }
    return {
      name: "Adam Krum Pocket Classic Sand S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OonEgGkWb1Ap7UJPs9B2IZU",
      url: "/adam/classicLogoSand.jpg",
    };
  };
  const data = ["/adam/classicLogoSand.jpg", "/adam/classicLogoSandB.jpg"];

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
          <Gallery list={data} defaultValue="/adam/classicLogoSand.jpg" />

          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">
                Adam Krum Classic T-shirt Sand
              </div>
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
