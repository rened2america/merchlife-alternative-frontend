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
import { Gallery } from "@/components/ui/components/gallery/gallery";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OtBO8GkWb1Ap7UJ14rgtXAY",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OtBOeGkWb1Ap7UJyWe6iR73",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1OtBPHGkWb1Ap7UJo5fhCFgA",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OtBPnGkWb1Ap7UJtjpmGCJM",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OtBQpGkWb1Ap7UJQSkPkxU9",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OtBRMGkWb1Ap7UJ5icaslYg",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Classic Monochrome Logo T-Shirt White 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OtBRwGkWb1Ap7UJ8KggJeNn",
        url: "/adam/classicMLogoWhite.png",
      };
    }
    return {
      name: "Adam Krum Classic Monochrome Logo T-Shirt White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OtBSaGkWb1Ap7UJVYJ2IlZX",
      url: "/adam/classicMLogoWhite.png",
    };
  };
  const data = ["/adam/classicMLogoWhite.png", "/adam/classicMLogoWhiteB.jpg"];

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
          <Gallery list={data} defaultValue="/adam/classicMLogoWhite.png" />

          <div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 text-xl">
                Adam Krum Classic Monochrome Logo T-Shirt White
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
