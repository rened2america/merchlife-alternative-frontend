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
// import { CustomCheckbox } from "@/app/components/customCheckbox.tsx/customCheckbox";
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
        name: "2A AF White M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OolfIGkWb1Ap7UJi10tbETx",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "2A AF White L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OolgHGkWb1Ap7UJmRNUrlWt",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "2A AF White XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Oolh4GkWb1Ap7UJauIu8AGE",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "2A AF White 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OolhkGkWb1Ap7UJ1hq8PKfW",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "2A AF White 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OoliIGkWb1Ap7UJObUSEy0V",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "2A AF White 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OolipGkWb1Ap7UJGLtCkHF6",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "2A AF White 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OoljKGkWb1Ap7UJVJrjm6fU",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    return {
      name: "2A AF White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OoljtGkWb1Ap7UJKGzI8MpW",
      url: "/2A/2AAfWhite.jpg",
    };
  };
  const data = ["/2A/2AAfWhite.jpg", "/2A/2AAfWhiteB.jpg"];

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
          <Gallery list={data} defaultValue="/2A/2AAfWhite.jpg" />

          <div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 text-xl">2A AF T-shirt White</div>
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
