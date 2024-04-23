import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarHeader } from "@/app/components/navbar/navbar";
import { FacebookIcon } from "@/app/components/icons/facebookIcon";
import { InstagramIcon } from "@/app/components/icons/InstagramIcon";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adam Krum",
  description: "Store",
};

export default function Creators() {
  return (
    <main
      style={{
        backgroundColor: "#171717",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <div
        style={{
          padding: "42px 72px 58px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          position: "relative",
        }}
      >
        <img
          src="/adam/ADAMB.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            background:
              "linear-gradient(180deg,hsla(0,0%,9%,.4),#171717 100%,#171717 0)",
            backdropFilter: "blur(5px)",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            zIndex: "2",
            display: "flex",
            width: "100%",
          }}
        >
          <Link href="/">
            <button
              className={inter.className}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                alignItems: "center",
              }}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path
                  fill="#FAFAFA"
                  fillRule="evenodd"
                  d="M13.333 8a.667.667 0 0 1-.666.666H3.333a.667.667 0 1 1 0-1.333h9.334c.368 0 .666.299.666.667Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FAFAFA"
                  fillRule="evenodd"
                  d="M8.471 13.138a.667.667 0 0 1-.942 0L2.862 8.472a.667.667 0 0 1 0-.943l4.667-4.667a.667.667 0 1 1 .942.943L4.276 8l4.195 4.195c.26.26.26.683 0 .943Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back
            </button>
          </Link>
        </div>
        <div
          style={{
            width: "192px",
            height: "192px",
            zIndex: "2",
          }}
        >
          <Avatar src="/adam/PAdamD1.png" className="w-48 h-48 text-large" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
            color: "#fff",
            zIndex: "2",
          }}
        >
          <h1
            className={inter.className}
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              lineHeight: "2rem",
            }}
          >
            Adam Krum
          </h1>
          <p
            className={inter.className}
            style={{
              fontWeight: "400",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            Welcome to the Adam Krum Merch Shop! Grab your favorite pieces and
            join the family. Thanks for your support and rock on!
          </p>

          <div
            style={{
              // fontWeight: "400",
              fontSize: "1.5rem",
              // lineHeight: "1.8rem",
              color: "white",
              height: "100px",
              width: "24px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "8px",
            }}
          >
            <Link
              href="https://www.instagram.com/AdamKrum/"
              style={{
                height: "100px",
                width: "24px",
                cursor: "pointer",
              }}
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
      <section
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div className="max-w-[900px] gap-2 grid grid-cols-12 px-8 pb-8">
          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Classic-White"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicLogoWhite.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic T-shirt White
              </h4>
            </CardFooter>
          </Card>
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Guitar-White"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/guitarLogoWhite.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Guitar T-shirt White
              </h4>
            </CardFooter>
          </Card> */}
          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Monochrome-Classic-White"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicMLogoWhite.png"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic Monochrome T-shirt White
              </h4>
            </CardFooter>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Classic-Grey"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicLogoGrey.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic T-shirt Grey
              </h4>
            </CardFooter>
          </Card>
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Star-Grey"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/starLogoGrey.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Star Grey
              </h4>
            </CardFooter>
          </Card> */}
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Guitar-Grey"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/guitarLogoGrey.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Guitar T-shirt Grey
              </h4>
            </CardFooter>
          </Card> */}

          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Classic-Green"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicLogoGreen.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic T-shirt Green
              </h4>
            </CardFooter>
          </Card>
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Star-Green"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/starLogoGreen.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Star Green
              </h4>
            </CardFooter>
          </Card> */}
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Guitar-Green"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/guitarLogoGreen.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Guitar T-shirt Green
              </h4>
            </CardFooter>
          </Card> */}
          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Classic-Black"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicLogoBlack.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic T-shirt Black
              </h4>
            </CardFooter>
          </Card>

          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Star-Black"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/starLogoBlack.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Star Black
              </h4>
            </CardFooter>
          </Card> */}
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Guitar-Black"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/guitarLogoBlack.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Guitar T-shirt Black
              </h4>
            </CardFooter>
          </Card> */}
          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Monochrome-Classic-Black"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicMLogoBlack.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic Monochrome T-shirt Black
              </h4>
            </CardFooter>
          </Card>

          <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Classic-Sand"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/classicLogoSand.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Classic T-shirt Sand
              </h4>
            </CardFooter>
          </Card>
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Star-Sand"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/starLogoSand.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Star Sand
              </h4>
            </CardFooter>
          </Card> */}
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/Adam-Krum-Pocket-Guitar-Sand"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/adam/guitarLogoSand.jpg"
                />
              </CardBody>
            </Link>
            <CardFooter
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h4
                className={`${interProducts.variable} font-sans text-cyan-50 font-medium text-sm`}
              >
                Adam Krum Guitar T-shirt Sand
              </h4>
            </CardFooter>
          </Card> */}
        </div>
      </section>
    </main>
  );
}
