import Link from "next/link";
import { RocketIcon } from "@/components/icons";
import { APP_TITLE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { validateRequest } from "@/lib/auth/validate-request";
import { UserDropdown } from "@/app/(main)/_components/user-dropdown";
import { CartCount } from "./cart-count";
// import useStore from "@/app/state/store";

const routes = [
  { name: "Home", href: "/" },
  { name: "Stores", href: "/stores" },
  { name: "Categories", href: "/categories" },
  { name: "How it works", href: "/how-it-works" },

  // { name: "about", href: '/about' }
] as const;

export const Header = async () => {
  const { user } = await validateRequest();
  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="focus:outline-none focus:ring-1 md:hidden"
              size="icon"
              variant="outline"
            >
              <HamburgerMenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <div className="py-1">
              {routes.map(({ name, href }) => (
                <DropdownMenuItem key={name} asChild>
                  <Link href={href}>{name}</Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/" className="flex items-center justify-center text-xl font-medium">
          <Image src="/logo.png" width="40" height="40" alt="logo" />
        </Link>

        <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          {routes.map(({ name, href }) => (
            <Link
              key={name}
              className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            alignItems: "center",
            columnGap: "8px",
          }}
          className="ml-auto"
        >

          <div className="relative flex  flex-col justify-center overflow-hidden bg-gradient-to-br">
            <div className="relative bg-[#F3F3F3] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <div className="mx-auto max-w-md">


                <form className="relative mx-auto w-max">
                  <input type="search"
                    className="peer cursor-pointer relative z-10 h-9 w-12 rounded-full  bg-transparent outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </form>


              </div>
            </div>
          </div>


          <CartCount />

          {user ? (
            <UserDropdown email={user.email} avatar={user.avatar} className="ml-auto" />
          ) : (
            <div className="">
              <Button asChild variant={"secondary"} className="rounded-none w-32">
                <Link href="/login">Login</Link>
              </Button>


            </div>
          )}

          <div>
            <Button asChild variant={"secondary"} className="rounded-none w-32">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
