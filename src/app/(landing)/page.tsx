import Link from "next/link";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  NextjsDark,
  ReactJs,
  ShadcnUi,
  TRPC,
  TailwindCss,
  StripeLogo,
  ReactEmail,
} from "./_components/feature-icons";
import CardSpotlight from "./_components/hover-card";
import { Suspense, useState, useEffect } from "react";
// import { Carousel } from "./components/carousel";
import { ThreeItemGrid } from "@/components/ui/components/grid/three-items";
import { ThreeItemGridStores } from "@/components/ui/components/gridStore/three-items-store";
import { Carousel } from "@/components/ui/components/carousel";
import Image from "next/image";
import { ButtonGroupProvider } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import { NextArrow } from "@/components/ui/components/icons/NextArrow";
import { CirclePre } from "@/components/ui/components/icons/CirclePre";
import { CircleNext } from "@/components/ui/components/icons/CircleNext";

import FeaturedProducts from "@/app/(landing)/_components/FeaturedProducts"

const raleway = Raleway({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Merchlife",
//   description:
//     "A Next.js starter template with nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
// };

const githubUrl = "https://github.com/iamtouha/next-lucia-auth";


const features = [
  {
    name: "Next.js",
    description: "The React Framework for Production",
    logo: NextjsIcon,
  },
  {
    name: "React.js",
    description: "Server and client components.",
    logo: ReactJs,
  },
  {
    name: "Authentication",
    description: "Credential authentication with password reset and email validation",
    logo: LuciaAuth,
  },
  {
    name: "Database",
    description: "Drizzle with postgres database",
    logo: Drizzle,
  },
  {
    name: "TypeSafe Backend",
    description: "Preserve type safety from backend to frontend with tRPC",
    logo: TRPC,
  },
  {
    name: "Subscription",
    description: "Subscription with stripe",
    logo: StripeLogo,
  },
  {
    name: "Tailwindcss",
    description: "Simple and elegant UI components built with Tailwind CSS",
    logo: TailwindCss,
  },
  {
    name: "Shadcn UI",
    description: "A set of beautifully designed UI components for React",
    logo: ShadcnUi,
  },
  {
    name: "React Email",
    description: "Write emails in React with ease.",
    logo: ReactEmail,
  },
];

const categories = [
  { id: 1, name: "Sweatshirts", image: "/category_sweatshirt_no_bg.png" },
  { id: 2, name: "Mug", image: "/category_mug_no_bg.png" },
  { id: 3, name: "T-Shirts", image: "/category_tshirt_no_bg.png" },
  { id: 3, name: "Hoodie", image: "/category_hoodie_no_bg.png" },
];

const products = [
  { id: 1, name: "Adam Krum Classic T-shirt Grey", price: "$24.5", image: "/adam/classicLogoGrey.jpg" },
  { id: 2, name: "Adam Krum Classic T-shirt White", price: "$24.5", image: "/adam/classicLogoWhite.jpg" },
  { id: 3, name: "Adam Krum Classic T-shirt Green", price: "$24.5", image: "/adam/classicLogoGreen.jpg" },
  { id: 4, name: "Adam Krum Classic T-shirt Sand", price: "$24.5", image: "/adam/classicLogoSand.jpg" },

];



const HomePage = () => {

  return (
    <>

      <section
        className={`bg-white ${raleway.className}`}
      >

        <div style={{ filter: "grayscale(50%)", }}>
          <div className="relative overflow-hidden bg-cover bg-no-repeat ">
            <img src="/above-the-fold.webp" alt="home" />
          </div>
        </div>
        <div className="h-[60px] w-full bg-[#E6E6E6] flex items-center text-black font-light gap-4 overflow-hidden relative">
          <div className="flex space-x-4 animate-scroll">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 px-3">
                <div className="flex justify-center items-center border border-black rounded-full w-[120px] h-[32px]">
                  Merchlife
                </div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
            ))}
          </div>
        </div>
        <ThreeItemGridStores />
        <div className="grid p-4 md:p-12 bg-[#E6E6E6] text-black">
          <div className="flex flex-col md:flex-row items-center justify-between pb-4 md:pb-12">
            <h2 className="font-normal text-3xl md:text-5xl">
              FEATURED <b>PRODUCTS</b>
            </h2>
            {/* <div className="flex justify-between mx-2 mt-4 md:mt-0">
              <button className="px-4 py-2  text-gray-800 rounded-md"> <CirclePre /></button>
              <button className="px-4 py-2  text-gray-800 rounded-md">
                <CircleNext />
              </button>
            </div> */}
          </div>
          <Suspense>
            <FeaturedProducts />
          </Suspense>
        </div>
        <div className="grid py-9">
          <div className="w-full grid grid-cols-1 space-y-4 md:space-y-0 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-4 md:px-8 bg-white">
            {categories.map((category) => (
              <Link key={category.id} href={"/stores?category=" + category.name} className="relative bg-[#E6E6E6] group">
                <div className="overflow-hidden">
                  <Image className="w-full object-cover h-full hover:transition-all group-hover:scale-110 duration-500" src={category.image} alt={category.name} width={500} height={500} />
                </div>
                <Button className="absolute bg-black text-white rounded-none py-4 px-10 md:py-6 md:px-20 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" variant={"ghost"}>
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>


      </section>
      <section id="how-it-works" className="bg-black">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "700",
              }}
              className="mb-4 text-4xl font-extrabold tracking-tight text-white"
            >
              Connect with Your Audience through Social Media
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
              }}
              className="mb-4"
            >
              Amplify your reach by linking your Merchlife store with your social media profiles.
              Engage directly with your fans and followers, and watch as your creations capture
              hearts and minds across platforms.
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              We are strategists, designers and developers. Innovators and problem solvers. Small
              enough to be simple and quick.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="socialmedia.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img src="/bg.png" alt="" height="300" />
      </div>


    </>
  );
};

export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
