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
        name: "Adam Krum Pocket Star Black M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OonioGkWb1Ap7UJWIH5TBN1",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Pocket Star Black L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OonjEGkWb1Ap7UJFuSvWpHe",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Pocket Star Black XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1OonjeGkWb1Ap7UJGocvaq6K",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Pocket Star Black 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1Oonk5GkWb1Ap7UJfYom5PNH",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Pocket Star Black 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OonkUGkWb1Ap7UJIHdkGr7A",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Pocket Star Black 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OonkuGkWb1Ap7UJqyRoqNmP",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Pocket Star Black 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OonlJGkWb1Ap7UJdgcTsHrw",
        url: "/adam/starLogoBlack.jpg",
      };
    }
    return {
      name: "Adam Krum Pocket Star Black S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OonllGkWb1Ap7UJ6y9Umxlw",
      url: "/adam/starLogoBlack.jpg",
    };
  };
  const data = ["/adam/starLogoBlack.jpg", "/adam/starLogoBlackB.jpg"];

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
          <Gallery list={data} defaultValue="/adam/starLogoBlack.jpg" />

          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">Adam Krum Star Black</div>
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
