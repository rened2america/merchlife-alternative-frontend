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
        name: "Adam Krum Pocket Guitar Grey M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OonXQGkWb1Ap7UJ3rdCylut",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Pocket Guitar Grey L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OonXtGkWb1Ap7UJa8LgAXWN",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Pocket Guitar Grey XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1OonYLGkWb1Ap7UJIBLIDyQ1",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Pocket Guitar Grey 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OonYrGkWb1Ap7UJFrUIX24M",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Pocket Guitar Grey 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OonZIGkWb1Ap7UJuwcdadRa",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Pocket Guitar Grey 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OonZiGkWb1Ap7UJPaZZBDep",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Pocket Guitar Grey 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OonaAGkWb1Ap7UJwgGIgNeb",
        url: "/adam/guitarLogoGrey.jpg",
      };
    }
    return {
      name: "Adam Krum Pocket Guitar Grey S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OonadGkWb1Ap7UJRy4T9df5",
      url: "/adam/guitarLogoGrey.jpg",
    };
  };
  const data = ["/adam/guitarLogoGrey.jpg", "/adam/guitarLogoGreyB.jpg"];

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
          <Gallery list={data} defaultValue="/adam/guitarLogoGrey.jpg" />

          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">
                Adam Krum Guitar T-shirt Grey
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
