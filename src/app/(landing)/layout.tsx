import { APP_TITLE } from "@/lib/constants";
import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";
import { Header } from "./_components/header";
import Footer from "../(main)/_components/footer";
import Loading from "../loading";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "A Next.js starter with T3 stack and Lucia auth.",
};

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="bg-background text-foreground dark">
          {children}
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default LandingPageLayout;
