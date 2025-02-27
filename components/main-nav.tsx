"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "./logo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface MainNavProps {
  items?: NavItem[];
}
export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="sm:hidden" variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="left" size="full">
        <SheetHeader className="flex items-center">
          <SheetTitle>
            <Logo height={64} width={256} />
          </SheetTitle>
        </SheetHeader>

        <Link
          href={"/"}
          className={cn(
            "text-muted-foreground flex items-center px-2 text-lg font-semibold",
          )}
        >
          Home
        </Link>
        <Link
          href={"https://leocorporation.dev"}
          className={cn(
            "text-muted-foreground flex items-center px-2 text-lg font-semibold",
          )}
        >
          Léo Corporation
        </Link>
        <Link
          href={"https://dev.peyronnet.group"}
          className={cn(
            "text-muted-foreground flex items-center px-2 text-lg font-semibold",
          )}
        >
          Devyus
        </Link>
      </SheetContent>
    </Sheet>
  );
}
export function NavMenu() {
  return (
    <>
      <SheetMenu />

      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Léo Corporation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex size-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="https://leocorporation.dev"
                    >
                      <img
                        height={128}
                        width={128}
                        src={"Logo.svg"}
                        alt={"The logo of Léo Corporation."}
                      />
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Léo Corporation
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Experience creator.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="https://leocorporation.dev/store/passliss"
                  title="Passliss"
                >
                  Passliss is a web application that allows you to generate
                  secure passwords, test the strength of exiting ones and more.
                </ListItem>
                <ListItem
                  href="https://gavilya.leocorporation.dev"
                  title="Gavilya"
                >
                  Gavilya gathers all your video games in one place.
                </ListItem>
                <ListItem href="https://leocorporation.dev/store" title="Store">
                  Browse all of our apps.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Devyus</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex size-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="https://dev.peyronnet.group"
                    >
                      <img
                        height={128}
                        width={128}
                        src={"Devyus.png"}
                        alt={"The logo of Léo Corporation."}
                      />
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Devyus
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Empowering developers.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="https://peyrsharp.leocorporation.dev/"
                  title="PeyrSharp"
                >
                  A C# library designed to make developers&apos; job easier.
                </ListItem>
                <ListItem
                  href="https://synethia.leocorporation.dev/"
                  title="Synethia"
                >
                  A basic C# algorithm that can determine the behavior of a user
                  with an application.
                </ListItem>
                <ListItem
                  href="https://www.nuget.org/profiles/Devyus"
                  title="NuGet"
                >
                  See all of our NuGet packages.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Logo height={48} width={180} />
      </Link>
      <NavMenu />
    </div>
  );
}
