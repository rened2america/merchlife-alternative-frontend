"use client";
import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Badge,
  Button,
} from "@nextui-org/react";
import { CartIcon } from "../icons/CartIcon";
import useStore from "@/app/state/store";

export const NavbarHeader = () => {
  const { products } = useStore((state) => {
    //@ts-ignore
    return { products: state.products };
  });
  console.log(products);
  return (
    <Navbar
      style={{
        backgroundColor: "hsla(0,0%,9%,.7)",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <NavbarBrand>
        <Link
          href="/store/The6PMersSwagShop"
          className="font-bold text-inherit"
        >
          Merchlife
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/cart">
            <Badge
              color="danger"
              content={products.length}
              // isInvisible={isInvisible}
              shape="circle"
            >
              <CartIcon />
            </Badge>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
