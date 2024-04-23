import { redirect } from "next/navigation";
import { env } from "@/env";
import { api } from "@/trpc/server";
import { type Metadata } from "next";
import * as React from "react";
import { Posts } from "./_components/posts";
import { PostsSkeleton } from "./_components/posts-skeleton";
import { validateRequest } from "@/lib/auth/validate-request";
import { redirects } from "@/lib/constants";
import { myPostsSchema } from "@/server/api/routers/post/post.input";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Profile",
  description: "Manage profile",
};

interface Props {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function DashboardPage({ searchParams }: Props) {
  const { page, perPage } = myPostsSchema.parse(searchParams);

  const { user } = await validateRequest();
  if (!user) redirect(redirects.toLogin);

  /**
   * Passing multiple promises to `Promise.all` to fetch data in parallel to prevent waterfall requests.
   * Passing promises to the `Posts` component to make them hot promises (they can run without being awaited) to prevent waterfall requests.
   * @see https://www.youtube.com/shorts/A7GGjutZxrs
   * @see https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
   */
  const promises = Promise.all([
    api.post.myPosts.query({ page, perPage }),
    api.stripe.getPlan.query(),
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl">Profile</h1>
        <p className="text-sm text-muted-foreground">Basic information</p>
      </div>
      <React.Suspense fallback={<PostsSkeleton />}>
        <Posts promises={promises} />
      </React.Suspense>
    </div>
  );
}
