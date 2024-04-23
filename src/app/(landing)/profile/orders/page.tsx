import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { validateRequest } from "@/lib/auth/validate-request";
import CardSpotlight from "../../_components/hover-card";
import { StripeLogo } from "../../_components/feature-icons";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Settings",
  description: "Manage settings",
};

export default async function BillingPage() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Orders</h1>
        <p className="text-sm text-muted-foreground">Manage your account settings</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardSpotlight
          name="6 PMers Black T-shirt"
          description="Product sending"
          logo={<StripeLogo />}
        />
      </div>
    </div>
  );
}
