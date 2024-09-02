// import { CodeIcon } from "@radix-ui/react-icons";
// import { ThemeToggle } from "@/components/theme-toggle";

// const githubUrl = "https://github.com/iamtouha/next-lucia-auth";
// const twitterUrl = "https://twitter.com/iamtouha";

// export const Footer = () => {
//   return (
//     <footer className="mt-6 px-4 py-6">
//       <div className="container flex items-center p-0">
//         <CodeIcon className="mr-2 h-6 w-6" />
//         <p className="text-sm">
//           Built by{" "}
//           <a className="underline underline-offset-4" href={twitterUrl}>
//             iamtouha
//           </a>
//           . Get the source code from{" "}
//           <a className="underline underline-offset-4" href={githubUrl}>
//             GitHub
//           </a>
//           .
//         </p>
//         <div className="ml-auto">
//           <ThemeToggle />
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMailOpenSharp } from "react-icons/io5";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { env } from "@/env";

const Footer = () => {
    const dashboardUrl = env.NEXT_PUBLIC_DASHBOARD_URL!;
    return (
        <>
            <div className="p-4 md:px-28 md:pt-28 pb-0 bg-black mt-28 text-white">
                <div className="mb-9 mt-[-90px] md:mt-[-150px] lg:mt-[-220px] w-full border border-gray-200 bg-gray-200 text-center shadow dark:border-0 dark:bg-gray-900 sm:p-8">
                    <h5 className="p-4 font-sans text-xl text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-6xl">
                        SUPPORT EVERY STEP OF THE WAY
                    </h5>
                    <p className="pb-4 mb-5 text-sm text-[#8C8E8F] dark:text-gray-400 sm:text-base md:text-lg lg:text-xl">
                        From placing an order to creating your perfect product,<br /> we're here to help every step of the way. Reach out anytime for support!
                    </p>
                </div>

                <div className="w-full py-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="flex items-center justify-center mb-4 lg:mb-0">
                            <Link href="/" className="">
                                <Image src="/logo.png" width="80" height="80" alt="logo" />
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-6 lg:h-12 lg:gap-0 lg:rounded-full lg:bg-gray-700 lg:p-0 mb-4 lg:mb-0">
                            <input
                                type="text"
                                name="email"
                                className="w-full lg:w-auto max-w-xl lg:max-w-none flex-1 rounded-full bg-gray-700 px-6 py-3 text-gray-900 placeholder:text-white focus:outline-none lg:bg-transparent lg:px-8 lg:py-5"
                                placeholder="Your email here..."
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-white px-6 lg:px-8 py-3 font-semibold text-black shadow-md hover:bg-white"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="md:flex">

                            <div className="flex items-center justify-end mb-4 lg:mb-0 md:mr-3">
                                <a href="mailto:support@merchlife.com" className="rounded-full  flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border-gray-400 border bg-gray-700">
                                    <IoMailOpenSharp className="w-4 h-4 lg:w-5 lg:h-5" />
                                </a>
                                <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                                    <div>Email Us!</div>
                                    <a href="mailto:support@merchlife.com" className="text-sm text-gray-500 dark:text-gray-400 ">mailto:support@merchlife.com</a>
                                </div>
                            </div>
                            <div className="flex items-center md:justify-end mr-10">
                                <a href="tel:+1 253 376 0307" className="rounded-full flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border-gray-400 border bg-gray-700">
                                    <PiPhoneCallDuotone className="w-4 h-4 lg:w-5 lg:h-5" />
                                </a>
                                <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                                    <div>Call Us!</div>
                                    <a href="tel:+1 253 376 0307" className="text-sm text-gray-500 dark:text-gray-400 ">+1 253 376 0307</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full  border-b border-t border-gray-400">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <div className="flex flex-col items-center justify-between gap-8 py-4 lg:flex-row ">
                            <a href="https://pagedone.io/" className="flex justify-center "></a>
                            <ul className="items-cente justify-center gap-14 text-center text-lg transition-all duration-500 sm:flex sm:gap-8 md:gap-5 lg:gap-10 xl:gap-14">
                                <li>
                                    <a href="/" className="text-white hover:text-gray-400">
                                        Home
                                    </a>
                                </li>
                                <li className="my-2 sm:my-0">
                                    <a href="/stores" className="text-white hover:text-gray-400">
                                        Stores
                                    </a>
                                </li>
                                <li>
                                    <a href="/categories" className="text-white hover:text-gray-400">
                                        Categories
                                    </a>
                                </li>
                                <li className="my-2 sm:my-0">
                                    <a href="/how-it-works" className="text-white hover:text-gray-400">
                                        How it works
                                    </a>
                                </li>
                                <li className="">                                
                                    <Link
                                        href={dashboardUrl}
                                        className="text-white hover:text-gray-400">
                                        Sell on Merchlife
                                    </Link>
                                </li>
                                <li>
                                    <a href="/about" className="text-white hover:text-gray-400">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/faq" className="text-white hover:text-gray-400">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <div className="flex  space-x-4 sm:justify-center  "></div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="">
                            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                                <span className="text-sm text-gray-500 ">
                                    Copyright © 2024 Merchlife. All Rights Reserved.
                                </span>
                                <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0 ">
                                    <a
                                        href="/terms-of-use"
                                        className=" items-centerhover:bg-gray-900 flex justify-center duration-500"
                                    >
                                        Terms of Service
                                    </a>

                                    <a
                                        href="/privacy-policy"
                                        className="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
