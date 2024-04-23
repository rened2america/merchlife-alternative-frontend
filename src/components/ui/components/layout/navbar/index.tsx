// import Cart from "./components/cart";
// import OpenCart from "./components/cart/open-cart";
"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Search from "./search";
import { UserAvatar } from "./user-avatar";
import { Badge, Button } from "@nextui-org/react";
import { CartIcon } from "../../icons/CartIcon";
const { SITE_NAME } = process.env;
import useStore from "@/state/store";
export default function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');

  const { products } = useStore((state) => {
    //@ts-ignore
    return { products: state.products };
  });
  const menu = [
    {
      title: "Stores",
      path: "/stores",
    },

    {
      title: "How it works",
      path: "#how-it-works",
    },
  ];

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">{/* <MobileMenu menu={menu} /> */}</div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <Image src="/logo.png" width="40" height="40" alt="logo" />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: any) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Link href="http://localhost:3000/login">
            <Button>Join</Button>
          </Link>
          <UserAvatar />
          <Link href="/cart">
            <Badge
              color="danger"
              content={products.length}
              // content={4}
              // isInvisible={isInvisible}
              shape="circle"
            >
              <CartIcon />
            </Badge>
          </Link>
          {/* <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense> */}
        </div>
      </div>
    </nav>
  );
}
