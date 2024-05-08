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
import { Suspense } from "react";
// import { Carousel } from "./components/carousel";
import { ThreeItemGrid } from "@/components/ui/components/grid/three-items";
import { ThreeItemGridStores } from "@/components/ui/components/gridStore/three-items-store";
import { Carousel } from "@/components/ui/components/carousel";
import Image from "next/image";
import { ButtonGroupProvider } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "Merchlife",
  description:
    "A Next.js starter template with nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
};

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

const HomePage = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "white",
        }}
      >
        {/* <div
          style={{
            filter: "grayscale(50%)",
          }}
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="/01.webp" alt="" />
          </div>
        </div> */}
        <div
          style={{
            width: "100%",
            height: "600px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "2fr 1fr",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "400",
                  }}
                >
                  CREATE
                </div>
                <div
                  style={{
                    fontSize: "72px",
                    fontWeight: "900",
                  }}
                >
                  SHARE
                </div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "400",
                  }}
                >
                  EARN
                </div>
              </div>
            </div>
            <div
              style={{
                height: "200px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Image width={230} height={200} src={"/classicLogoGreen_1.png"} alt="back black" />
              <Image width={230} height={200} src={"/classicLogoSand_1.png"} alt="back black" />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              display: "grid",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyItems: "center",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "32px",
                  fontWeight: "700",
                }}
              >
                6 PMERS BLACK
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "32px",
                  fontWeight: "700",
                }}
              >
                T-SHIRT
              </div>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                SHOP NOW
              </Button>
            </div>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "end",
              }}
            >
              <Image width={250} height={200} src={"/product_two_1.png"} alt="back black" />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "end",
            }}
          >
            <Image width={230} height={200} src={"/2AAfWhite_1.png"} alt="back black" />
          </div>
        </div>
        <div
          style={{
            height: "60px",
            width: "100%",
            backgroundColor: "#E6E6E6",
            display: "flex",
            alignItems: "center",
            color: "black",
            fontWeight: "300",
            flexDirection: "row",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "150px",
              gap: "16px",
              alignItems: "center",
              padding: "0px 12px",
            }}
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                border: "0.5px solid black",
                borderRadius: "40px",
                width: "120px",
              }}
            >
              Merchlife
            </div>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "24px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "80px 1fr",
            padding: "24px 24px",
            marginTop: "24px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <div
            style={{
              fontWeight: "400",
              fontSize: "48px",
            }}
          >
            SELLERS AT <b>MERCHLIFE</b>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "24px",
                border: "1px solid #ababab",
                display: "grid",
                gridTemplateRows: "2fr 1fr",
              }}
            >
              <Image width={450} height={500} src={"/6PMers.jpg"} alt="back black" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                }}
              >
                <Image width={140} height={150} src={"/product_one.jpg"} alt="back black" />
                <Image width={140} height={150} src={"/product_two.jpg"} alt="back black" />
                <Image width={140} height={150} src={"/product_three.jpg"} alt="back black" />
              </div>
            </div>
            <div
              style={{
                padding: "24px",
                border: "1px solid #ababab",
                display: "grid",
                gridTemplateRows: "2fr 1fr",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  borderBottom: "16px solid white",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image width={450} height={500} src={"/adam/ADAMB.png"} alt="back black" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                }}
              >
                <Image
                  width={140}
                  height={150}
                  src={"/adam/classicLogoBlack.jpg"}
                  alt="back black"
                />
                <Image
                  width={140}
                  height={150}
                  src={"/adam/classicLogoSand.jpg"}
                  alt="back black"
                />
                <Image
                  width={140}
                  height={150}
                  src={"/adam/classicLogoWhite.jpg"}
                  alt="back black"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "80px 1fr",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: "700",
              width: "100%",
              display: "grid",
              justifyContent: "center",
              color: "black",
            }}
          >
            CATEGORIES
          </div>
          <div
            style={{
              width: "100%",
              padding: "72px 32px",
              backgroundColor: "white",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <Image width={400} height={500} src={"/product_one.jpg"} alt="back black" />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  color: "white",
                  right: "30%",
                  top: " 95%",
                  width: "200px",
                  height: "50px",
                  textAlign: "center",
                  display: "grid",
                  alignContent: "center",
                }}
              >
                6 PM ears
              </div>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  color: "white",
                  right: "30%",
                  top: " 95%",
                  width: "200px",
                  height: "50px",
                  textAlign: "center",
                  display: "grid",
                  alignContent: "center",
                }}
              >
                6 PM ears
              </div>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <Image width={400} height={500} src={"/adam/classicLogoBlack.jpg"} alt="back black" />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  color: "white",
                  right: "30%",
                  top: " 95%",
                  width: "200px",
                  height: "50px",
                  textAlign: "center",
                  display: "grid",
                  alignContent: "center",
                }}
              >
                ADAM KRUM
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "80px 1fr",
            padding: "24px 24px",
            marginTop: "24px",
            backgroundColor: "rgb(226 226 226)",
            color: "black",
          }}
        >
          <div
            style={{
              fontWeight: "400",
              fontSize: "48px",
            }}
          >
            PRODUCT <b>PREVIEWS</b>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "36px",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateRows: "3fr 1fr",
                border: "1px solid black",
                justifyItems: "center",
              }}
            >
              <Image width={200} height={250} src={"/adam/classicLogoGrey.jpg"} alt="back black" />

              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px",
                }}
              >
                Adam Krum Classic T-shirt Grey
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "3fr 1fr",
                border: "1px solid black",
                justifyItems: "center",
              }}
            >
              <Image width={200} height={250} src={"/adam/classicLogoWhite.jpg"} alt="back black" />

              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px",
                }}
              >
                Adam Krum Classic T-shirt White
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "3fr 1fr",
                border: "1px solid black",
                justifyItems: "center",
              }}
            >
              <Image width={200} height={250} src={"/adam/classicLogoGreen.jpg"} alt="back black" />

              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px",
                }}
              >
                Adam Krum Classic T-shirt Green
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "3fr 1fr",
                border: "1px solid black",
                justifyItems: "center",
              }}
            >
              <Image width={200} height={250} src={"/adam/classicLogoSand.jpg"} alt="back black" />

              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px",
                }}
              >
                Adam Krum Classic T-shirt Sand
              </div>
            </div>
          </div>
        </div>
        {/* <ThreeItemGridStores /> */}
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
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center px-4 py-8 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Support Every Step of the Way
            </h2>
            <p className="mb-4">
              Whether you need creative guidance or technical support, our teams are here to ensure
              a smooth, enjoyable experience. From concept to customer, we&apos;re with you at every
              step.
            </p>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="features"></a> Features
          </h1>
          <p className="mb-10 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            This starter template is a guide to help you get started with Next.js for large scale
            applications. Feel free to add or remove features to suit your needs.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, i) => (
              <CardSpotlight
                key={i}
                name={feature.name}
                description={feature.description}
                logo={<feature.logo className="h-12 w-12" />}
              />
            ))}
          </div>
        </div>
      </section> */}
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
