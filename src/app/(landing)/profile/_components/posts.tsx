import { type RouterOutputs } from "@/trpc/shared";
import * as React from "react";
import { NewPost } from "./new-post";
import { PostCard } from "./post-card";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordInput } from "@/components/password-input";
import { DiscordLogoIcon } from "@/components/icons";
import { APP_TITLE } from "@/lib/constants";
import { login } from "@/lib/auth/actions";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { validateRequest } from "@/lib/auth/validate-request";
interface PostsProps {
  promises: Promise<[RouterOutputs["post"]["myPosts"], RouterOutputs["stripe"]["getPlan"]]>;
}

export async function Posts({ promises }: PostsProps) {
  /**
   * use is a React Hook that lets you read the value of a resource like a Promise or context.
   * @see https://react.dev/reference/react/use
   */
  // const [posts, subscriptionPlan] = React.use(promises);
  const { user } = await validateRequest();
  /**
   * useOptimistic is a React Hook that lets you show a different state while an async action is underway.
   * It accepts some state as an argument and returns a copy of that state that can be different during the duration of an async action such as a network request.
   * @see https://react.dev/reference/react/useOptimistic
   */

  if (!user) return null;
  return (
    <div className="grid gap-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                required
                autoComplete="current-password"
                placeholder="Full Name"
                value={user.name}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                required
                placeholder="email@example.com"
                autoComplete="email"
                name="email"
                type="email"
                value={user.email}
              />
            </div>
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input
                name="password"
                required
                autoComplete="current-password"
                placeholder="*******"
              />
            </div>

            <div className="flex flex-wrap justify-between">
              <Button variant={"link"} size={"sm"} className="p-0" asChild>
                <Link href={"/reset-password"}>Forgot password?</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
