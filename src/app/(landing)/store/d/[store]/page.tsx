import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Button,
// } from "@nextui-org/react";
import { Inter } from "next/font/google";
// import { NavbarHeader } from "@/app/components/navbar/navbar";
// import { NavbarHeader } from "@/components/ui/components/navbar/navbar";
import { FacebookIcon } from "@/components/ui/components/icons/facebookIcon";
import { InstagramIcon } from "@/components/ui/components/icons/InstagramIcon";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });
import type { Metadata } from "next";
import { Twitter } from "@/components/ui/components/icons/twitter";

export const metadata: Metadata = {
  title: "2A American Freedom",
  description: "Store",
};

async function getArtist(artist: string) {
  const res = await fetch(`http://localhost:4000/api/1/artist/store/${artist}/`, {
    cache: "no-store",
  });
  return res.json();
}

async function getGropRelationByArtist(artist: string) {
  const res = await fetch(`http://localhost:4000/api/1/product/groupRelation/${artist}`);
  return res.json();
}

export default async function Store({ params }: { params: { store: string } }) {
  const artistDataPromise = getArtist(params.store);
  const artistRelationPromise = getGropRelationByArtist(params.store);
  const [artistData, artistRelation] = await Promise.all([
    artistDataPromise,
    artistRelationPromise,
  ]);
  console.log("artistData.data", artistData.artist);
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
          src={artistData.artist.banner}
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
            background: "linear-gradient(180deg,hsla(0,0%,9%,.4),#171717 100%,#171717 0)",
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
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
          {/* <Avatar
            src={artistData.artist.avatar}
            className="w-48 h-48 text-large"
          /> */}
          avatar
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
            {artistData.artist.name}
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
            {artistData.artist.bio}
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
              gridTemplateColumns: "1fr 1fr 1fr",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {artistData.artist.instagram && (
              <Link
                href={artistData.artist.instagram}
                style={{
                  height: "100px",
                  width: "24px",
                  cursor: "pointer",
                }}
              >
                <InstagramIcon />
              </Link>
            )}
            {artistData.artist.twitter && (
              <Link
                href={artistData.artist.twitter}
                style={{
                  height: "100px",
                  width: "24px",
                  cursor: "pointer",
                }}
              >
                <Twitter />
              </Link>
            )}
            {artistData.artist.facebook && (
              <Link
                href={artistData.artist.facebook}
                style={{
                  height: "100px",
                  width: "24px",
                  cursor: "pointer",
                }}
              >
                <FacebookIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
      <section
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div className="grid max-w-[900px] grid-cols-12 gap-2 px-8 pb-8">
          {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
            <Link href={"/product/2A-AF-White"}>
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
                  src="/2A/2AAfWhite.jpg"
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
                2A AF Tee White
              </h4>
            </CardFooter>
          </Card> */}
          {/* {artistData.data
            ? artistData.data.map((product: any) => {
                return (
                  <Card
                    key={product.id}
                    className="col-span-12 sm:col-span-4 h-[400px]"
                  >
                    <Link
                      //   href={`/product/${product.productId}/?variant=${product.variant}`}
                      href={`/product/d/${artistData.artist.name.replace(
                        / /g,
                        "-"
                      )}?productId=${product.productId}&variant=${
                        product.variant
                      }&type=${product.product.types[0].value}`}
                    >
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
                          src={product.url}
                          style={{
                            minHeight: "364px",
                            backgroundColor: "#e5e5e5",
                          }}
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
                        {`${product.product.title} ${product.variant}`}
                      </h4>
                    </CardFooter>
                  </Card>
                );
              })
            : null} */}
        </div>
      </section>
    </main>
  );
}
