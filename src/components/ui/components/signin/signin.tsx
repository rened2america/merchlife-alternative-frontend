"use client";

import { useState } from "react";
import { signIn } from "@/auth";
import { login } from "@/app/lib/actions";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action={login}>
      <div>
        Email
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        Password
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}
