"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { APP_TITLE } from "@/lib/constants";
import { login } from "@/lib/auth/actions";
import { useState } from "react";

export function Login() {
  const [state, formAction] = useFormState(login, null);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <div className="bg-black absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black bottom-0 h-full w-full overflow-auto">
        <div className="relative h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
          <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
            <div className="self-start hidden lg:flex flex-col text-gray-300">
              <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
              <p className="pr-3 text-sm opacity-75">
                Log in to your account to access your profile.
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center z-10 p-10 mt-12">
            <div className="p-12 bg-white mx-auto rounded-3xl w-full max-w-md sm:w-96">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">Log In {APP_TITLE}</h3>
                <p className="text-gray-400">
                  Don't have an account? &nbsp;
                  <Link href={"/signup"} className="text-sm text-purple-700 hover:text-purple-700">
                    Sign Up
                  </Link>
                </p>
              </div>
              <form action={formAction} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <input
                      required
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                      type="email"
                      placeholder="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </div>

                  <div className="relative">
                    <input
                      name="password"
                      required
                      autoComplete="current-password"
                      placeholder="Password"
                      type={showPassword ? 'password' : 'text'}
                      className="text-sm mt-2 text-gray-800 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                    />
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                      {showPassword ? (
                        <svg
                          onClick={() => setShowPassword(!showPassword)}
                          className="h-4 mt-3 text-purple-700 cursor-pointer"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setShowPassword(!showPassword)}
                          className="h-4 mt-3 text-purple-700 cursor-pointer"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {state?.fieldError ? (
                    <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                      {Object.values(state.fieldError).map((err) => (
                        <li className="ml-4" key={err}>
                          {err}
                        </li>
                      ))}
                    </ul>
                  ) : state?.formError ? (
                    <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                      {state?.formError}
                    </p>
                  ) : null}

                  <div className="flex items-center justify-between">
                    <div className="text-sm ml-auto">
                      <Link href={"/reset-password"} className="text-purple-700 hover:text-purple-600">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-black hover:bg-black text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <Link
                      href={"/"}
                      className="w-full flex justify-center bg-black hover:bg-black-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <svg
          className="fixed bottom-0 left-0 w-full hidden md:block md:w-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
}
